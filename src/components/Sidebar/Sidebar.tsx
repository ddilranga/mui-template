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
import type { NavLinkGroup, NavLink as INavLink } from "interfaces";
import { useMemo, useState, memo } from "react";
import { SidebarContextProvider, useSidebarContext } from "./Sidebar.context";
import type SidebarProps from "./Sidebar.types";

const NavLink = ({ route }: { route: INavLink }) => {
  const { isExpanded: isRouteExpanded, links, name, icon, onClick } = route;

  const [isExpanded, setIsExpanded] = useState(isRouteExpanded);
  const { onLinkClick } = useSidebarContext();

  const onClickItem = (
    e: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => {
    const passedFunc = onClick ? onClick : onLinkClick;

    passedFunc?.(e, route);

    if (links && links.length > 0) setIsExpanded(!isExpanded);
  };

  return (
    <>
      <ListItemButton onClick={onClickItem}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {links &&
          links.length > 0 &&
          (isExpanded ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense>
          {links && getNavLinks(links)}
        </List>
      </Collapse>
    </>
  );
};

const getNavLinks = (links: INavLink[]) => {
  return links.map((route) => <NavLink route={route} key={route.key} />);
};

const getRoutes = (groups: NavLinkGroup[]) => {
  return groups.map((group, index) => (
    <List
      key={index}
      dense
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
  onLinkClick,
}: SidebarProps) => {
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
      <SidebarContextProvider value={{ onLinkClick }}>
        {navGroupRenderer}
      </SidebarContextProvider>
    </Drawer>
  );
};

export default memo(Sidebar);
