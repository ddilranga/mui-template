import { UserLayout } from "layouts";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { RequireAuth } from "utils";

const Dashboard = lazy(() => import("views/Dashboard"));
// to test suspense fallback and suspense error fallback, uncomment the following code
// const Dashboard = lazy(() => {
//   return new Promise((resolve) => setTimeout(resolve, 1000)).then(
//     () => import("views/Dashboard/")
//   );
// });

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
