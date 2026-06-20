const BASE_URL = import.meta.env.VITE_FAXNOVA_API_URL;
const API_KEY = import.meta.env.VITE_FAXNOVA_API_KEY;

export async function getOutboundFaxes() {
  const res = await fetch(`${BASE_URL}/fax/outbound`, {
    headers: { Authorization: API_KEY },
  });
  return res.json();
}

export async function getInboundFaxes() {
  const res = await fetch(`${BASE_URL}/fax/inbound`, {
    headers: { Authorization: API_KEY },
  });
  return res.json();
}
