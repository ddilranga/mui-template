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
  // useMediaQuery,
} from "@mui/material";
// import { Theme } from "@mui/system";
import React from "react";

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
  // const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

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
      // variant={mobile ? "temporary" : "persistent"}
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
