const accountVerification = (verifyLink: string): string => {
  const currentYear: number = new Date().getFullYear();

  return `
        <div style="background-color: #f6f4ff; padding: 10px; font-family: Arial, sans-serif;">
      <!-- Container -->
      <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 30px;">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #6a49f2; font-size: 28px; font-weight: bold; margin-bottom: 10px;">Welcome to Notivo!</h2>
          <p style="color: #3e3f66; font-size: 16px; margin: 0;">Thank you for signing up. Let's get you started by verifying your account!</p>
        </div>
        
        <!-- Verification Button -->
        <div style="text-align: center; margin-top: 30px;">
          <a href="${verifyLink}" style="background-color: #6a49f2; color: #ffffff; padding: 14px 28px; border-radius: 50px; font-size: 18px; font-weight: bold; text-decoration: none; display: inline-block;">
            Verify Your Account
          </a>
        </div>

        <!-- Expiration Message -->
        <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #ff7438;">
          <p>This link will expire in 3 hours. Please verify your account before then!</p>
        </div>

        <!-- Instructions -->
        <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #3e3f66;">
          <p>If you didn’t request this, you can safely ignore this email. Your account will not be affected.</p>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 40px; font-size: 12px; color: #a1a1a1;">
          <p>&copy; ${currentYear} Notivo. All Rights Reserved.</p>
          <p>If you need assistance, feel free to <a href="mailto:support@notivo.in" style="color: #6a49f2; text-decoration: none;">contact our support team</a>.</p>
        </div>
      </div>
    </div>
  `;
};

export default accountVerification;
