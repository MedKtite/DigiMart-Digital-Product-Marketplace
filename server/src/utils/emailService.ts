import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('EMAIL:', process.env.EMAIL);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendVerificationEmail = async (to: string, subject: string, verificationLink: string) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; text-align: center;">
        <h2 style="color: #333;">Email Verification</h2>
        <p>Thank you for registering. Please click the button below to verify your email address:</p>
        <a href="${verificationLink}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">
          <button style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Verify Email</button>
        </a>
        <p>If you did not request this, please ignore this email.</p>
        <p>Best regards,<br>Your Company</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const testEmail = async () => {
  const email = process.env.EMAIL;
  if (!email) {
    throw new Error('EMAIL environment variable is not defined');
  }
  const verificationLink = 'https://yourdomain.com/verify?token=your_verification_token';
  await sendVerificationEmail(email, 'Test Email', verificationLink);
};

testEmail();