import { useEffect, useState } from "react";
import { getOutboundFaxes } from "../api/faxApi";
import DataTable from "../components/DataTable";

export default function Outbound() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOutboundFaxes()
      .then((data) => setRows(data.faxes || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Outbound Faxes</h1>
      {loading ? <p>Loading…</p> : <DataTable rows={rows} />}
    </div>
  );
}
