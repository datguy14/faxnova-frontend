export default function DataTable({ rows }) {
  if (!rows.length) return <p>No faxes found.</p>;

  return (
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3">Fax ID</th>
          <th className="p-3">To/From</th>
          <th className="p-3">Provider</th>
          <th className="p-3">Status</th>
          <th className="p-3">Pages</th>
          <th className="p-3">Timestamp</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((fax) => (
          <tr key={fax.faxId} className="border-t">
            <td className="p-3">{fax.faxId}</td>
            <td className="p-3">{fax.toNumber || fax.fromNumber}</td>
            <td className="p-3">{fax.provider}</td>
            <td className="p-3">{fax.status}</td>
            <td className="p-3">{fax.pages}</td>
            <td className="p-3">
              {fax.sentAt || fax.receivedAt
                ? new Date(fax.sentAt || fax.receivedAt).toLocaleString()
                : "—"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
