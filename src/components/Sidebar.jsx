import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h1 className="text-xl font-bold mb-6">FaxNova</h1>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-600">Outbound Faxes</Link>
        <Link to="/inbound" className="hover:text-blue-600">Inbound Faxes</Link>
        <Link to="/audit" className="hover:text-blue-600">Audit Logs</Link>
      </nav>
    </div>
  );
}
