import { NavLink } from "react-router-dom";

import navigation, { logoutItem } from "../../../constants/navigation";

import Logo from "../../ui/Logo";

import useAuth from "../../../hooks/useAuth";

const Sidebar = () => {
  const { logout } = useAuth();
  const LogoutIcon = logoutItem.icon;

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">
      <div className="border-b border-slate-800 p-8">
        <Logo />
      </div>

      <nav className="flex-1 space-y-2 p-6">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-6">
        <button
          onClick={logout}
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-500 hover:text-white"
        >
          <LogoutIcon size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
