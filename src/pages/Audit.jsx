import { useEffect, useState } from "react";
import { getAuditLogs } from "../api/auditApi.js";
import AuditTable from "../components/AuditTable.jsx";

export default function Audit() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getAuditLogs().then(setLogs);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Audit Logs</h2>
      <AuditTable logs={logs} />
    </div>
  );
}
