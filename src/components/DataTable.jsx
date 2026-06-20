export default function DataTable({ data }) {
  if (!data || data.length === 0) {
    return <p>No records found.</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table className="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="p-2 border-b text-left font-semibold">
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col} className="p-2 border-b">
                {String(row[col])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
