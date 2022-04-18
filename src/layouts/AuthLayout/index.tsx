import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          m: 4,
        }}
      >
        <Toolbar />
      </Box>
      <Outlet />
      <Box
        sx={{
          m: 4,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default AuthLayout;
