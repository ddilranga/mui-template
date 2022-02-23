import { ReactElement } from "react";

// reference: https://github.com/microsoft/fluentui/blob/master/packages/react/src/components/Nav/Nav.types.ts

export interface NavLinkGroup {
  /**
   * Text to render as the header of a group
   */
  name?: string;

  /**
   * Links to render within this group
   */
  links: NavLink[];

  /**
   * If true, the group should render collapsed by default
   */
  collapseByDefault?: boolean;

  /**
   * Callback invoked when a group header is clicked
   */
  onHeaderClick?: (
    ev?: React.MouseEvent<HTMLElement>,
    isCollapsing?: boolean
  ) => void;

  /**
   * Provides consumer control to update the collapsed/expanded state of the group.
   */
  isExpanded?: boolean;
}

export interface NavLink {
  /**
   * Text to render for this link
   */
  name: string;

  /**
   * URL to navigate to for this link
   */
  path: string;

  /**
   * Unique, stable key for the link, used when rendering the list of links
   */
  key?: string;

  /**
   * Child links to this link, if any
   */
  links?: NavLink[];

  /**
   * Callback invoked when this link is clicked.
   */
  onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: NavLink) => void;

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
   * Whether or not the link is disabled.
   */
  disabled?: boolean;
}
