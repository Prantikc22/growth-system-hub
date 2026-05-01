// Vercel serverless function — CommonJS export required
// (Vercel non-Next.js functions default to CJS loader)
import type { IncomingMessage, ServerResponse } from "http";

async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse): Promise<void> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  // Manually read + parse body (Vercel non-Next.js does NOT auto-parse)
  let body: any;
  try {
    const raw = await new Promise<string>((resolve, reject) => {
      let data = "";
      req.on("data", (chunk) => (data += chunk));
      req.on("end", () => resolve(data));
      req.on("error", reject);
    });
    body = JSON.parse(raw);
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Invalid JSON body" }));
    return;
  }

  const RESEND_API_KEY =
    process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "RESEND_API_KEY not configured" }));
    return;
  }

  const { to, subject, html, bcc } = body as {
    to: string;
    subject: string;
    html: string;
    bcc?: string;
  };

  if (!to || !subject || !html) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Missing required fields: to, subject, html" }));
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

    const data = await response.json() as any;

    if (!response.ok) {
      res.writeHead(response.status, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: data }));
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: true, id: data.id }));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: String(err) }));
  }
}

module.exports = handler;
