import { LayoutDashboard, GitCompareArrows, User, LogOut } from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
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
];

export const logoutItem = {
  label: "Logout",
  icon: LogOut,
};

export default navigation;
