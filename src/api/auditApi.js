const BASE_URL = import.meta.env.VITE_FAXNOVA_API_URL;
const API_KEY = import.meta.env.VITE_FAXNOVA_API_KEY;

async function request(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: API_KEY,
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export function getAuditLogs() {
  return request("/fax/logs");
}
