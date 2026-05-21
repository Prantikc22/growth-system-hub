export async function sendConfirmationEmail({
  toEmail,
  subject,
  bodyHtml,
}: {
  toEmail: string;
  toName: string;
  subject: string;
  bodyHtml: string;
}) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to: toEmail, subject, html: bodyHtml }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error("Email API error:", err);
  }
}

export function quoteConfirmationHtml(name: string, services: string) {
  return `
<!DOCTYPE html>
<html>
<body style="font-family:'Helvetica Neue',Arial,sans-serif;background:#f7f6f3;margin:0;padding:40px 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.06);">
    <tr>
      <td style="background:#080B12;padding:32px 40px;">
        <span style="font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">Remarqd</span>
      </td>
    </tr>
    <tr>
      <td style="padding:40px;">
        <h2 style="font-size:24px;font-weight:800;color:#111;margin:0 0 12px;">Got your quote request, ${name}.</h2>
        <p style="font-size:15px;color:#555;line-height:1.6;margin:0 0 24px;">
          We've received your request and someone from our team will get back to you within <strong>one working day</strong>.
        </p>
        <div style="background:#f7f6f3;border-radius:10px;padding:20px 24px;margin-bottom:28px;">
          <p style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#999;margin:0 0 8px;font-weight:600;">Services requested</p>
          <p style="font-size:15px;color:#222;font-weight:600;margin:0;">${services}</p>
        </div>
        <p style="font-size:14px;color:#888;line-height:1.6;margin:0 0 32px;">
          While you wait, feel free to explore our <a href="https://remarqd.com/work" style="color:#7C3AED;text-decoration:none;font-weight:600;">case studies</a> or reach out on <a href="https://wa.me/919073559000" style="color:#7C3AED;text-decoration:none;font-weight:600;">WhatsApp</a>.
        </p>
        <a href="https://remarqd.com" style="display:inline-block;background:#080B12;color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 28px;border-radius:100px;">Visit Remarqd →</a>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 40px;border-top:1px solid #eee;">
        <p style="font-size:12px;color:#aaa;margin:0;">© ${new Date().getFullYear()} Remarqd · quote@remarqd.com</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function contactConfirmationHtml(name: string) {
  return `
<!DOCTYPE html>
<html>
<body style="font-family:'Helvetica Neue',Arial,sans-serif;background:#f7f6f3;margin:0;padding:40px 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.06);">
    <tr>
      <td style="background:#080B12;padding:32px 40px;">
        <span style="font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">Remarqd</span>
      </td>
    </tr>
    <tr>
      <td style="padding:40px;">
        <h2 style="font-size:24px;font-weight:800;color:#111;margin:0 0 12px;">We'll be in touch, ${name}.</h2>
        <p style="font-size:15px;color:#555;line-height:1.6;margin:0 0 24px;">
          Your message is with us. Expect a response within <strong>one working day</strong>.
        </p>
        <p style="font-size:14px;color:#888;line-height:1.6;margin:0 0 32px;">
          In the meantime, check out our <a href="https://remarqd.com/work" style="color:#7C3AED;text-decoration:none;font-weight:600;">work</a> or reach us directly on <a href="mailto:quote@remarqd.com" style="color:#7C3AED;text-decoration:none;font-weight:600;">quote@remarqd.com</a>.
        </p>
        <a href="https://remarqd.com" style="display:inline-block;background:#080B12;color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 28px;border-radius:100px;">Visit Remarqd →</a>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 40px;border-top:1px solid #eee;">
        <p style="font-size:12px;color:#aaa;margin:0;">© ${new Date().getFullYear()} Remarqd · quote@remarqd.com</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
