import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
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
    }