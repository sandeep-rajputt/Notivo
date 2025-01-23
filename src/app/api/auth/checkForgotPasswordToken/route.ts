import { verifyToken } from "@services/token";
import isValidToken from "@utils/isValidToken";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const checkTokenValid = isValidToken(token);
    if (!checkTokenValid) {
      throw new Error("Invalid token");
    }
    const JWT_SECRET = process.env.JWT_FORGOT_PASSWORD_SECRET;
    if (!JWT_SECRET) {
      throw new Error("Something Went Wrong");
    }
    const decode = await verifyToken(token, JWT_SECRET);
    if (decode) {
      return new Response("Verification successful");
    } else {
      throw new Error("Invalid token");
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 401,
    });
  }
}
