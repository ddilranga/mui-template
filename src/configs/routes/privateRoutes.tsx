import UserLayout from "layouts/UserLayout";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { RequireAuth } from "utils";

const Dashboard = lazy(() => import("views/dashboard/Dashboard"));

const privateRoutes: RouteObject[] = [
  {
    path: "app",
    element: (
      <RequireAuth>
        <UserLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/app",
        element: <Navigate to="/app/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default privateRoutes;
