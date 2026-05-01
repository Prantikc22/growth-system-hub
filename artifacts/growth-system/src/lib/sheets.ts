const SHEETS_URL = import.meta.env.VITE_SHEETS_URL as string | undefined;

export async function appendToSheet(row: Record<string, string>) {
  if (!SHEETS_URL) {
    console.info("[sheets] VITE_SHEETS_URL not configured — skipping", row);
    return;
  }

  const res = await fetch(SHEETS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [row] }),
  });

  if (!res.ok) {
    console.error("[sheets] SheetDB append failed", await res.text());
  }
}
