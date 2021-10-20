import { Layout } from "configs";
import AuthLayout from "layouts/AuthLayout";
import UserLayout from "layouts/UserLayout";
import { Navigate, Outlet, RouteObject } from "react-router";
import { RequireAuth } from "views/auth/login/context";
import LoginPage from "views/auth/login/login";
import Dashboard from "views/dashboard/Dashboard";

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
