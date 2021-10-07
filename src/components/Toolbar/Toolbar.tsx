import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  IconButton,
  Stack,
  styled,
  Toolbar as MuiToolbar,
  Typography
} from "@mui/material";
import ThemeToggle from "./ThemeToggle";

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
        <Stack>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggle(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
        >
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>

          <Stack
            direction="row"
            spacing="4"
            alignItems="center"
            justifyContent="flex-end"
          >
            <ThemeToggle />
          </Stack>
        </Stack>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
