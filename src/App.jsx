import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
