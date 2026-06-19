import { useEffect, useState } from "react";
import { getInboundFaxes } from "../api/faxApi";
import DataTable from "../components/DataTable";

export default function Inbound() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInboundFaxes()
      .then((data) => setRows(data.faxes || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Inbound Faxes</h1>
      {loading ? <p>Loading…</p> : <DataTable rows={rows} />}
    </div>
  );
}
