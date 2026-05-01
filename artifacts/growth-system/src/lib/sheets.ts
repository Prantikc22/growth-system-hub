const SHEETS_URL = import.meta.env.VITE_SHEETS_URL as string | undefined;

export async function appendToSheet({
  sheet,
  row,
}: {
  sheet: string;
  row: Record<string, string>;
}) {
  if (!SHEETS_URL) {
    console.info("[sheets] VITE_SHEETS_URL not configured — skipping", { sheet, row });
    return;
  }

  const url = `${SHEETS_URL}?sheet=${encodeURIComponent(sheet)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [row] }),
  });

  if (!res.ok) {
    console.error("[sheets] SheetDB append failed", await res.text());
  }
}
