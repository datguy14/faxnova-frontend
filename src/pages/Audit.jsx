import { useEffect, useState } from "react";
import { getAuditLogs } from "../api/auditApi";
import AuditTable from "../components/AuditTable";

export default function Audit() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuditLogs()
      .then((data) => setLogs(data.logs || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Audit Logs</h1>
      {loading ? <p>Loading…</p> : <AuditTable logs={logs} />}
    </div>
  );
}
