import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

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
        Auth Toolbar
      </Box>
      <Outlet />
      <Box
        sx={{
          m: 4,
        }}
      >
        Auth Footer
      </Box>
    </Box>
  );
};

export default AuthLayout;
