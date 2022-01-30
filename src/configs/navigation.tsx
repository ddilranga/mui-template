import {
  AccountBox as ProfileIcon,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import { NavLinkGroup } from "interfaces";

const navigation: NavLinkGroup[] = [
  {
    links: [
      {
        name: "Dashboard",
        path: "/app/dashboard",
        key: "dashboard",
        icon: <DashboardIcon />,
      },
    ],
    name: "Apps",
  },
  {
    links: [
      {
        name: "Profile",
        path: "/pages/profile",
        key: "profile",
        icon: <ProfileIcon />,
      },
    ],
    name: "Pages",
  },
];

export default navigation;
