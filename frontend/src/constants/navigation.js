import {
  LayoutDashboard,
  BarChart3,
  GitCompareArrows,
  User,
  RefreshCw,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Compare",
    path: "/compare",
    icon: GitCompareArrows,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    label: "Sync",
    path: "/sync",
    icon: RefreshCw,
  },
];

export const logoutItem = {
  label: "Logout",
  icon: LogOut,
};

export default navigation;
