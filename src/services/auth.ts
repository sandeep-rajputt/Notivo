import User, { IUser } from "@models/User";
import dbConnect from "@/lib/dbConnect";
import { hashPassword } from "@services/hash";
import bcrypt from "bcryptjs";
import sendMail from "@services/sendMail";
import accountVerification from "@/utils/EmailTemplate/accountVerification";
import { createJWTToken, verifyToken } from "@services/token";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { jwtVerify } from "jose";

/**
 * Signup a new user
 * @param name - User's name
 * @param email - User's email
 * @param password - User's password (OPTIONAL)
 * @returns - Return the new user
 */

export async function signUp(name: string, email: string, password?: string) {
  try {
    await dbConnect();
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("Email already exist");
    }
    const hashedPassword = password ? await hashPassword(password) : null;
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      platforms: [],
      reminders: [],
    });
    await newUser.save();
    const stringId = newUser._id.toString();
    const JWT_SECRET = process.env.JWT_VERIFICATION_EMAIL_SECRET;
    if (!JWT_SECRET) {
      throw new Error(
        "Unable to create an account at the moment. Please report this issue on our Contact Us page. We apologize for the inconvenience."
      );
    }
    const token = await createJWTToken(email, "3h", JWT_SECRET);
    const mail = accountVerification(
      `${process.env.FRONTENT_URL}/verify-account?token=${token}`
    );
    await sendMail({
      email,
      subject: "Verify your Notivo account",
      emailHTML: mail,
    });
    return { id: stringId, email: newUser.email, name: newUser.name };
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

/**
 * login a new user
 * @param email - User's email
 * @param password - User's password
 * @returns - Return the new user
 */

export async function login(email: string, password: string) {
  try {
    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("No account found with this email");
    }
    if (!existingUser.password) {
      throw new Error("Incorrect password");
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword) {
      throw new Error("Incorrect password");
    }
    const stringId = existingUser._id.toString();
    return { id: stringId, email, name: existingUser.name };
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

/**
 * Give the user all data to frontend
 * @param email - User Email
 * @returns - Return the user Data
 */

export async function getUserData(email: string) {
  try {
    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("User not found");
    }
    return filterUserData(existingUser);
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

/**
 * Filter the user data
 * @param data - User Data Object
 * @returns - Return the filtered user Data
 */

type ReturnData = Omit<IUser, "password"> & {
  password: boolean;
};

export async function filterUserData(data: IUser) {
  const returnData: ReturnData = {
    ...data.toObject(),
    password: Boolean(data.password),
  };
  return returnData;
}

/**
 * Verify User Account
 * @param token - User Data Object
 * @returns - Return boolean
 */

export async function verifyUserAccount(token: string) {
  try {
    const JWT_SECRET = process.env.JWT_VERIFICATION_EMAIL_SECRET;
    if (!JWT_SECRET) {
      throw new Error(
        "Unable to send the account verification link at this moment. Please report this issue on our Contact Us page. We apologize for the inconvenience."
      );
    }
    const decode = await verifyToken(token, JWT_SECRET);

    if (typeof decode !== "string" && decode?.email) {
      await dbConnect();
      const existingUser = await User.findOne({ email: decode.email });

      if (!existingUser) {
        throw new Error("User not found");
      }

      await existingUser.updateOne({ verified: true });
      return true;
    }
    throw new Error(
      "Unable To verify account. Please try again later or contact support."
    );
  } catch {
    throw new Error(
      "Oops! This link has expired or is invalid. Please request a new one to proceed."
    );
  }
}

/**
 * Retrieves the user's email from the session token and compare it to request cookies token
 * @param {Request} req - The incoming request object.
 * @returns {Promise<string|null>} - The user's email if authenticated, or null if not authenticated.
 */
export async function getUserEmail(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token?.email) {
      throw new Error("Unauthorized");
    }
    const signedEmail = req.headers.get("x-signed-email");
    if (signedEmail && process.env.JWT_MIDDLEWARE_SECRET) {
      const encoder = new TextEncoder();
      const secretKey = encoder.encode(process.env.JWT_MIDDLEWARE_SECRET);
      try {
        const { payload } = await jwtVerify(signedEmail, secretKey);
        if (payload.email === token.email) {
          return token.email;
        }
      } catch (error) {
        throw new Error((error as Error).message);
      }
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
