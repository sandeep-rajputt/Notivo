import { NextRequest } from "next/server";
import emailSchema from "@schemas/emailSchema";
import User from "@models/User";
import dbConnect from "@lib/dbConnect";
import sendMail from "@services/sendMail";
import getMailLeftTime from "@utils/getMailLeftTime";
import { createJWTToken } from "@services/token";
import ResetPassword from "@utils/EmailTemplate/ResetPassword";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { email } = emailSchema.parse(body);
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("User not found");
    }
    const lastForgotPassMailSent = existingUser.lastForgotPassMailSent;
    const timeleft = getMailLeftTime(lastForgotPassMailSent, 3600000);
    if (timeleft) {
      throw new Error(
        `You have recently requested a forgot password request. Please wait for ${timeleft} before requesting another one.`
      );
    }

    const JWT_SECRET = process.env.JWT_FORGOT_PASSWORD_SECRET;
    if (!JWT_SECRET) {
      throw new Error(
        "Unable to send the forgot password link at this moment. Please report this issue on our Contact Us page. We apologize for the inconvenience."
      );
    }

    const token = await createJWTToken(email, "3h", JWT_SECRET);
    const mail = ResetPassword(
      `${process.env.FRONTENT_URL}/change-password?token=${token}`
    );
    await sendMail({
      email,
      subject: "Reset your password - Notivo",
      emailHTML: mail,
    });

    const currentDate = new Date();
    await existingUser.updateOne({ lastForgotPassMailSent: currentDate });
    return new Response(
      "A password reset link has been sent to your email successfully. Please check your inbox to proceed."
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 400,
    });
  }
}
