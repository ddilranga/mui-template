import {
	AccountBox as ProfileIcon,
	Dashboard as DashboardIcon,
} from "@mui/icons-material";
import { INavLinkGroup } from "components/Sidebar/Sidebar.types";

const navigation: INavLinkGroup[] = [
	{
		links: [
			{
				name: "Dashboard",
				url: "/app/dashboard",
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
				url: "/pages/profile",
				key: "profile",
				icon: <ProfileIcon />,
			},
		],
		name: "Pages",
	},
];

export default navigation;
