import { NavLinkGroup } from "interfaces";
import { Dashboard, Shield, ShieldCheck, User } from "tabler-icons-react";

const navigation: NavLinkGroup[] = [
  {
    name: "Apps",
    links: [
      {
        name: "Dashboard",
        path: "/app/dashboard",
        key: "dashboard",
        icon: <Dashboard />,
      },
      {
        name: "Example",
        path: "/app/example",
        key: "example",
        icon: <Shield />,
        links: [
          {
            name: "Child Link",
            path: "/app/example/subLink",
            key: "example/subLink",
            icon: <ShieldCheck />,
          },
        ],
      },
    ],
  },
  {
    name: "Pages",
    links: [
      {
        name: "Profile",
        path: "/pages/profile",
        key: "profile",
        icon: <User />,
      },
    ],
  },
];

export default navigation;
