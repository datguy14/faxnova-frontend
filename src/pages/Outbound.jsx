import { useEffect, useState } from "react";
import { getOutboundFaxes } from "../api/faxApi.js";
import DataTable from "../components/DataTable.jsx";

export default function Outbound() {
  const [faxes, setFaxes] = useState([]);

  useEffect(() => {
    getOutboundFaxes().then(setFaxes);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Outbound Faxes</h2>
      <DataTable data={faxes} />
    </div>
  );
}
