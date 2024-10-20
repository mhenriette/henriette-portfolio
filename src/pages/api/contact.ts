import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { first_name, last_name, email, message } = JSON.parse(req.body);
  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Website activity from ${email}`,
      html: `
            <p>Name: ${first_name} ${last_name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email sending failed" });
  }
}
