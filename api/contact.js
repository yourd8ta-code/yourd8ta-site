import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New demo request from ${email}`,
        text: message,
      });

      res.status(200).json({ status: "ok" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error" });
    }
  } else {
    res.status(405).json({ status: "method not allowed" });
  }
}
