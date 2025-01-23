import nodemailer, { SendMailOptions } from "nodemailer";

interface SendMailParams {
  email: string;
  subject: string;
  emailHTML: string;
}

async function sendMail({
  email,
  subject,
  emailHTML,
}: SendMailParams): Promise<void> {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions: SendMailOptions = {
      from: `"Get Notify" ${process.env.NOTIVO_EMAIL}`,
      to: email,
      subject: subject,
      html: emailHTML,
    };

    await transporter.sendMail(mailOptions);
    return;
  } catch (err) {
    throw new Error((err as Error).message);
  }
}

export default sendMail;
