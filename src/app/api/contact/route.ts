import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  await transporter.sendMail({
    from: `"NextDetectAI Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email, // 👈 USER email goes here
    subject: "New Contact Message – NextDetectAI",
    text: `From: ${email}\n\nMessage:\n${message}`,
  });

  return Response.json({ success: true });
}
