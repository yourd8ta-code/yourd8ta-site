export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    // Here you would integrate with your Gmail / SendGrid / Mail API
    // For now, just log it:
    console.log("Email form submitted:", { email, message });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
