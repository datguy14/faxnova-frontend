import { useEffect, useState } from "react";
import { getInboundFaxes } from "../api/faxApi.js";
import DataTable from "../components/DataTable.jsx";

export default function Inbound() {
  const [faxes, setFaxes] = useState([]);

  useEffect(() => {
    getInboundFaxes().then(setFaxes);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inbound Faxes</h2>
      <DataTable data={faxes} />
    </div>
  );
}
