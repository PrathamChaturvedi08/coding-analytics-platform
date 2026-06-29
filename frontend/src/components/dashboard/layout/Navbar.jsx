import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-10 py-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>

        <p className="text-slate-400">
          Track your coding progress and analytics
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-white">
          {user?.name?.charAt(0).toUpperCase() || "D"}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
