import { Dashboard as DashboardIcon } from "@mui/icons-material";
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
];

export default navigation;
