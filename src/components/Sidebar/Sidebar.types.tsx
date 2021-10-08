import { ReactElement } from "react";

// reference: https://github.com/microsoft/fluentui/blob/master/packages/react/src/components/Nav/Nav.types.ts

export interface INavProps {
  /**
   * A collection of link groups to display in the navigation bar
   */
  groups: INavLinkGroup[] | null;

  /**
   * Function callback invoked when a link in the navigation is clicked
   */
  onLinkClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;

  /**
   * Function callback invoked when the chevron on a link is clicked
   */
  onLinkExpandClick?: (
    ev?: React.MouseEvent<HTMLElement>,
    item?: INavLink
  ) => void;
}

export interface INavLinkGroup {
  /**
   * Text to render as the header of a group
   */
  name?: string;

  /**
   * Links to render within this group
   */
  links: INavLink[];

  /**
   * Callback invoked when a group header is clicked
   */
  onHeaderClick?: (
    ev?: React.MouseEvent<HTMLElement>,
    isCollapsing?: boolean
  ) => void;
}

export interface INavLink {
  /**
   * Text to render for this link
   */
  name: string;

  /**
   * URL to navigate to for this link
   */
  url: string;

  /**
   * Unique, stable key for the link, used when rendering the list of links and for tracking
   * the currently selected link.
   */
  key?: string;

  /**
   * Child links to this link, if any
   */
  links?: INavLink[];

  /**
   * Callback invoked when this link is clicked. Providing this callback will cause the link
   * to render as a button (rather than an anchor) unless forceAnchor is set to true.
   */
  onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;

  /**
   * Name of an icon to render next to the link button.
   */
  icon?: ReactElement;

  /**
   * Whether or not the link is in an expanded state
   */
  isExpanded?: boolean;

  /**
   * Text for title tooltip and ARIA description.
   */
  title?: string;

  /**
   * Link <a> target.
   */
  target?: string;

  /**
   * Whether or not the link is disabled.
   */
  disabled?: boolean;

  /**
   * (Optional) Any additional properties to apply to the rendered links.
   */
  [propertyName: string]: any;
}
