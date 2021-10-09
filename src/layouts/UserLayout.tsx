import { styled } from "@mui/material";
import { Box } from "@mui/system";
import Sidebar from "components/Sidebar";
import Toolbar from "components/Toolbar";
import { navigation, routes } from "configs";
import { useState } from "react";
import { useRoutes } from "react-router";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: 0,
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: `${drawerWidth}px`,
	}),
}));

const Footer = styled("footer", {
	shouldForwardProp: (prop) => prop !== "open",
})<{
	open?: boolean;
}>(({ theme, open }) => ({
	marginTop: "auto",
	marginLeft: 0,
	padding: theme.spacing(3),
	...(open && {
		marginLeft: `${drawerWidth}px`,
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const UserLayout = () => {
	const [open, setOpen] = useState(true);

	const routesRenderer = useRoutes(routes());

	const toggleDrawer = (open: boolean) => {
		setOpen(open);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
				minHeight: "100vh",
			}}
		>
			<Toolbar open={open} toggle={toggleDrawer} />

			<Sidebar
				groups={navigation}
				drawerWidth={drawerWidth}
				open={open}
				toggle={toggleDrawer}
				header={DrawerHeader}
			/>
			<Main open={open}>
				<DrawerHeader />
				{routesRenderer}
			</Main>
			<Footer open={open}>Footer</Footer>
		</Box>
	);
};

export default UserLayout;
