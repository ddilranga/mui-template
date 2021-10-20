import UserLayout from "layouts/UserLayout";
import { Navigate, RouteObject } from "react-router";
import { RequireAuth } from "views/auth/login/context";
import Dashboard from "views/dashboard/Dashboard";

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
