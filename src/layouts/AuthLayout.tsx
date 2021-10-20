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
      <div>Login Layout</div>
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
