export async function fetchConfigValue(key: string): Promise<string | null> {
  const res = await fetch("http://localhost:8081/api/website/admin/getConfig", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key }),
  });

  const text = await res.text();

  if (!res.ok) {
    console.error("getConfig failed:", res.status, text);
    return null;
  }

  try {
    const json = JSON.parse(text);
    const data = json?.data ?? json?.payload ?? json;

    if (typeof data === "string") return data.trim();
    if (typeof data?.value === "string") return data.value.trim();

    console.error("Unexpected response shape:", json);
    return null;
  } catch (e) {
    return text.trim() || null;
  }
}
