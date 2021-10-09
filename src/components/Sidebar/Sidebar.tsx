import { ChevronLeft, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	Collapse,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { INavLink, INavLinkGroup, ISidebarProps } from "./Sidebar.types";

const NavLink = ({
	route: { isExpanded: isRouteExpanded, links, name, icon },
}: {
	route: INavLink;
}) => {
	const [isExpanded, setIsExpanded] = useState(isRouteExpanded);

	return (
		<>
			<ListItemButton onClick={() => setIsExpanded(!isExpanded)}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={name} />
				{links &&
					links.length > 0 &&
					(isExpanded ? <ExpandLess /> : <ExpandMore />)}
			</ListItemButton>
			<Collapse in={isExpanded} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{links && getNavLinks(links)}
				</List>
			</Collapse>
		</>
	);
};

const getNavLinks = (links: INavLink[]) => {
	return links.map((route) => <NavLink route={route} key={route.key} />);
};

const getRoutes = (groups: INavLinkGroup[]) => {
	return groups.map((group, index) => (
		<List
			key={index}
			component="nav"
			aria-labelledby={`list-subheader${index}`}
			subheader={
				<ListSubheader component="div" id={`list-subheader${index}`}>
					{group.name}
				</ListSubheader>
			}
		>
			{group.links && getNavLinks(group.links)}
		</List>
	));
};

const Sidebar = ({
	drawerWidth,
	header: DrawerHeader,
	open,
	toggle,
	groups,
}: ISidebarProps) => {
	const navGroupRenderer = useMemo(() => getRoutes(groups), [groups]);

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			variant={"persistent"}
			anchor="left"
			open={open}
		>
			<DrawerHeader>
				<IconButton onClick={() => toggle(false)}>
					<ChevronLeft />
				</IconButton>
			</DrawerHeader>
			<Divider />
			{navGroupRenderer}
		</Drawer>
	);
};

export default React.memo(Sidebar);
