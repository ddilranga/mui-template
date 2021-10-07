import { Navigate, RouteObject } from "react-router";

const routes = () => {
  const routesArr: RouteObject[] = [
    {
      path: "/",
      element: <Navigate to="/app/dashboard" />
    },
    {
      path: "app",
      children: [
        {
          path: "/app",
          element: <Navigate to="/app/dashboard" />
        },
        {
          path: "dashboard",
          element: <>App Dashboard</>
        }
      ]
    },
    {
      path: "404",
      element: <>404</>,
    },
    {
      path: "*",
      element: <Navigate to="/404" />
    }
  ]

  return routesArr;
}

export default routes;