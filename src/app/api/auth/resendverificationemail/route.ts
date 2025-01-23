import { createJWTToken } from "@services/token";
import accountVerification from "@/utils/EmailTemplate/accountVerification";
import sendMail from "@services/sendMail";
import { getUserEmail } from "@services/auth";
import { NextRequest } from "next/server";
import User from "@models/User";
import dbConnect from "@lib/dbConnect";
import getMailLeftTime from "@utils/getMailLeftTime";

export async function POST(req: NextRequest) {
  try {
    const email = await getUserEmail(req);
    if (email) {
      await dbConnect();
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        throw new Error("User not found");
      }
      const lastVerificationEmailSent = existingUser.lastVerificationEmailSent;
      const timeleft = getMailLeftTime(lastVerificationEmailSent, 3600000);
      if (timeleft) {
        throw new Error(
          `You have recently requested a verification email. Please wait for ${timeleft} before requesting another one.`
        );
      }
      const JWT_SECRET = process.env.JWT_VERIFICATION_EMAIL_SECRET;
      if (!JWT_SECRET) {
        throw new Error(
          "Unable to send the account verification link at this moment. Please report this issue on our Contact Us page. We apologize for the inconvenience."
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
      const currentDate = new Date();
      await existingUser.updateOne({ lastVerificationEmailSent: currentDate });
      return new Response("Verification email sent successfully");
    }
    return new Response("Email not found, please try again later", {
      status: 404,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 401,
    });
  }
}
