import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/layout/Sidebar";
import Navbar from "../components/dashboard/layout/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
