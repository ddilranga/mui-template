import type { NavLink, NavLinkGroup } from "interfaces";

interface SidebarProps {
  /**
   * A collection of link groups to display in the navigation bar
   */
  groups: NavLinkGroup[];

  /**
   * Function callback invoked when a link in the navigation is clicked
   */
  onLinkClick?: (ev?: React.MouseEvent<HTMLElement>, item?: NavLink) => void;

  /**
   * Function callback invoked when the chevron on a link is clicked
   */
  onLinkExpandClick?: (
    ev?: React.MouseEvent<HTMLElement>,
    item?: NavLink
  ) => void;

  drawerWidth: number;
  header: React.FC;
  open: boolean;
  toggle: (open: boolean) => void;
}

export default SidebarProps;
