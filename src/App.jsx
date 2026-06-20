import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Outbound from "./pages/Outbound.jsx";
import Inbound from "./pages/Inbound.jsx";
import Audit from "./pages/Audit.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Outbound />} />
            <Route path="/inbound" element={<Inbound />} />
            <Route path="/audit" element={<Audit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
