import { Router } from "express";

const router = Router();

router.post("/send-email", async (req, res) => {
  const RESEND_API_KEY = process.env.VITE_RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    res.status(500).json({ error: "RESEND_API_KEY not configured" });
    return;
  }

  const { to, subject, html, bcc } = req.body as {
    to: string;
    subject: string;
    html: string;
    bcc?: string;
  };

  if (!to || !subject || !html) {
    res.status(400).json({ error: "Missing required fields: to, subject, html" });
    return;
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
      res.status(response.status).json({ error: data });
      return;
    }
    res.json({ success: true, id: (data as { id: string }).id });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

export default router;
