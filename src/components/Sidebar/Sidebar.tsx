import {
  ChevronLeft,
  Inbox as InboxIcon,
  Mail as MailIcon
} from "@mui/icons-material";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React from "react";
import { INavLinkGroup } from "./Sidebar.types";

const routes: INavLinkGroup[] = [
  {
    links: [
      {
        name: "something",
        url: "/something"
      }
    ],
    name: "Test Group Name"
  }
];

const Sidebar = ({
  drawerWidth,
  header: DrawerHeader,
  open,
  toggle
}: {
  drawerWidth: number;
  header: React.FC;
  open: boolean;
  toggle: (open: boolean) => void;
}) => {
  console.log(routes);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
