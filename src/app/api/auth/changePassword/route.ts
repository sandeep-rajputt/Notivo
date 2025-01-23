import { NextRequest } from "next/server";
import isValidToken from "@utils/isValidToken";
import { verifyToken } from "@services/token";
import dbConnect from "@lib/dbConnect";
import User from "@models/User";
import { hashPassword } from "@services/hash";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { token, password, confirmPassword } = await req.json();
    if (!token || !password || !confirmPassword) {
      throw new Error("Something Went Wrong");
    }
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
      const existingUser = await User.findOne({ email: decode.email });
      if (!existingUser) {
        throw new Error("User not found");
      }
      const hashedPassword = await hashPassword(password);
      await existingUser.updateOne({ password: hashedPassword });
      return new Response("Password changed sucessfull");
    } else {
      throw new Error("Invalid token");
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 400,
    });
  }
}
