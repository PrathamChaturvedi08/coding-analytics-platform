import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
