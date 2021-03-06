import { AuthLayout } from "layouts";
import { Navigate, RouteObject } from "react-router-dom";
import LoginPage from "views/Auth/Login";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/app/dashboard" />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <>Register</>,
      },
    ],
  },
];

export default publicRoutes;
