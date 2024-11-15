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

export const sendVerificationEmail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
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
  await sendVerificationEmail(email, 'Test Email', 'This is a test email');
};

testEmail();