export default function AuditTable({ logs }) {
  if (!logs || logs.length === 0) {
    return <p>No audit logs found.</p>;
  }

  return (
    <table className="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          <th className="p-2 border-b">Timestamp</th>
          <th className="p-2 border-b">Action</th>
          <th className="p-2 border-b">Details</th>
        </tr>
      </thead>

      <tbody>
        {logs.map((log, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="p-2 border-b">{log.timestamp}</td>
            <td className="p-2 border-b">{log.action}</td>
            <td className="p-2 border-b">{log.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
