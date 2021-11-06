import { CssBaseline } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import React from "react";

const fontFamily = [
  "IBM Plex Sans",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
].join(",");

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#5893df",
    // },
    // secondary: {
    //   main: "#2ec5d3",
    // },
    // background: {
    //   default: "#192231",
    //   paper: "#24344d",
    // },
  },
  typography: {
    fontFamily,
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6863F2",
    },
    secondary: {
      main: "#04BFAD",
    },
    info: {
      main: "#B99AD9",
    },
    warning: {
      main: "#F2CB05",
    },
    error: {
      main: "#F24405",
    },
  },
  typography: {
    fontFamily,
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

type ColorModes = "light" | "dark";

const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = React.useState<ColorModes>("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => {
    if (mode === "light") {
      return lightTheme;
    }

    return darkTheme;
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
