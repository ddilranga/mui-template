import AuthLayout from "layouts/AuthLayout";
import { Navigate, RouteObject } from "react-router-dom";
import LoginPage from "views/auth/login/login";

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
