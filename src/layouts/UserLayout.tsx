import { styled } from "@mui/material";
import { Box } from "@mui/system";
import Sidebar from "components/Sidebar";
import { ISidebarProps } from "components/Sidebar/Sidebar.types";
import Toolbar from "components/Toolbar";
import { navigation } from "configs";
import { Suspense, useCallback, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const onLinkClick: ISidebarProps["onLinkClick"] = useCallback(
    (event, item) => {
      event?.preventDefault();
      item?.url && navigate(item.url);
    },
    [navigate]
  );

  const toggleDrawer = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

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
        onLinkClick={onLinkClick}
      />
      <Main open={open}>
        <DrawerHeader />
        <Suspense fallback={<>loading...</>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer open={open}>Footer</Footer>
    </Box>
  );
};

export default UserLayout;
