const SHEETS_URL = import.meta.env.VITE_SHEETS_URL as string | undefined;

export async function appendToSheet({
  sheet,
  row,
}: {
  sheet: string;
  row: Record<string, string>;
}) {
  if (!SHEETS_URL) {
    console.info("[sheets] VITE_SHEETS_URL not configured — skipping sheet append", { sheet, row });
    return;
  }
  const res = await fetch(SHEETS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sheet, row }),
  });
  if (!res.ok) {
    console.error("[sheets] append failed", await res.text());
  }
}
