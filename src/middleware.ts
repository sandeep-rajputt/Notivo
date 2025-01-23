import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { SignJWT } from "jose";

// Authenticated Users Routes
const secureRoutes: string[] = [
  "/dashboard",
  "/new-reminder",
  "/all-reminders",
  "/setting",
  "/new-password",
];

// protected API routes
const protectedApiRoutes: string[] = [
  "/api/auth/verifyuseraccount",
  "/api/auth/resendverificationemail",
  "/api/dashboard",
  "/api/userdata",
];

// Non Authenticated Users Auth Routes
const nonAuthUserRoutes: string[] = ["/login", "/signup", "/api/auth/error"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Decode the JWT to check for a session
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if ((path === "/login" || path === "/signup") && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If the user is trying to access a secure route without being authenticated, redirect to /login
  if (secureRoutes.includes(path) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If the user is trying to access a non authenticated route while being authenticated, redirect to /dashboard
  if (nonAuthUserRoutes.includes(path) && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (path === "/api/auth/error") {
    const cookies = req.cookies;
    const url = new URL(req.url);
    const error = url.searchParams.get("error");
    const callback = cookies.get("next-auth.callback-url");
    const callbackUrl = `${callback?.value}?error=${error}`;
    if (callback && error) {
      return NextResponse.redirect(new URL(callbackUrl || "/", req.url));
    }
  }

  if (protectedApiRoutes.includes(path) && token) {
    if (process.env.JWT_SECRET) {
      const encoder = new TextEncoder();
      const secretKey = encoder.encode(process.env.JWT_MIDDLEWARE_SECRET);

      const signedEmail = await new SignJWT({ email: token.email })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(secretKey);

      const response = NextResponse.next();
      response.headers.set("x-signed-email", signedEmail);
      return response;
    } else {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/new-reminder",
    "/all-reminders",
    "/setting",
    "/new-password",
    "/login",
    "/signup",
    "/api/auth/error",
    "/api/auth/verifyuseraccount",
    "/api/auth/resendverificationemail",
    "/api/dashboard",
    "/api/userdata",
  ],
};
