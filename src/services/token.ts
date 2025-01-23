import { SignJWT, jwtVerify } from "jose";

/**
 * Verifies a JWT token.
 * @param token - JWT token to verify
 * @returns - Decoded token data or an error
 */

export async function verifyToken(token: string, jwt_secret: string) {
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(token, encoder.encode(jwt_secret));
    return payload;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

/**
 * Create a JWT token.
 * @param time - Time to live for the token in milliseconds
 * @param userEmail - User email id
 * @returns  - Return a JWT token
 */

export async function createJWTToken(
  userEmail: string,
  expireTime: string,
  jwt_secret: string
) {
  const encoder = new TextEncoder();
  const token = await new SignJWT({ email: userEmail })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expireTime)
    .sign(encoder.encode(jwt_secret));
  return token;
}
