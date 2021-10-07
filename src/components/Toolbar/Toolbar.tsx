import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Typography,
  Toolbar as MuiToolbar,
  IconButton
} from "@mui/material";
import { styled } from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Toolbar = ({
  open,
  toggle
}: {
  open: boolean;
  toggle: (open: boolean) => void;
}) => {
  return (
    <AppBar position="fixed" open={open}>
      <MuiToolbar component="nav">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggle(true)}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
