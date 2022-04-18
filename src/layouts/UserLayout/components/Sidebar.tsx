import {
  Box,
  Collapse,
  Group,
  Navbar,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { navigation } from "configs";
import type { NavLink as INavLink, NavLinkGroup } from "interfaces";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "tabler-icons-react";

const NavLink = ({ route }: { route: INavLink }) => {
  const { isExpanded: isRouteExpanded, links, name, icon, onClick } = route;

  const [isExpanded, setIsExpanded] = useState(isRouteExpanded);

  const navigate = useNavigate();

  const onLinkClick = (
    event?: React.MouseEvent<HTMLElement>,
    item?: INavLink
  ) => {
    event?.preventDefault();
    item?.path && navigate(item.path);
  };

  const onClickItem = (
    e: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => {
    if (links && links.length > 0) return setIsExpanded(!isExpanded);

    const passedFunc = onClick ? onClick : onLinkClick;

    passedFunc?.(e, route);
  };

  return (
    <>
      <UnstyledButton onClick={onClickItem} sx={{ width: "100%" }}>
        <Group>
          <ThemeIcon
            variant="light"
            color={route.color || "primary"}
            size={30}
            radius="sm"
          >
            {icon}
          </ThemeIcon>
          <Text>{name}</Text>

          {links && links.length > 0 && (
            <Box sx={{ marginLeft: "auto" }}>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Box>
          )}
        </Group>
      </UnstyledButton>
      <Collapse in={!!isExpanded}>{links && getNavLinks(links)}</Collapse>
    </>
  );
};

const getNavLinks = (links: INavLink[]) => {
  return links.map((route) => <NavLink route={route} key={route.key} />);
};

const getRoutes = (groups: NavLinkGroup[]) => {
  return groups.map((group, index) => (
    <Box key={index}>
      <Text>{group.name}</Text>
      {group.links && getNavLinks(group.links)}
    </Box>
  ));
};

interface SidebarProps {
  opened: boolean;
}

const Sidebar = ({ opened }: SidebarProps) => {
  const navGroupRenderer = useMemo(() => getRoutes(navigation), []);

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 240 }}
    >
      <Navbar.Section grow component={ScrollArea} mx="-md" px="md">
        {navGroupRenderer}
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
