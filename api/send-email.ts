// Vercel serverless function — /api/send-email
// Local dev: Vite proxy forwards /api/* → Express server (port 8080)
// Production: Vercel routes /api/send-email to this function

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Vercel env vars use RESEND_API_KEY (no VITE_ prefix on the server side)
  const RESEND_API_KEY =
    process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: "RESEND_API_KEY not configured" });
  }

  const { to, subject, html, bcc } = req.body as {
    to: string;
    subject: string;
    html: string;
    bcc?: string;
  };

  if (!to || !subject || !html) {
    return res
      .status(400)
      .json({ error: "Missing required fields: to, subject, html" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Remarqd <quote@remarqd.com>",
        reply_to: "hello@remarqd.com",
        to: [to],
        bcc: bcc ? [bcc] : ["quote@remarqd.com"],
        subject,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.json({ success: true, id: (data as { id: string }).id });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
