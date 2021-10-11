import { Navigate, RouteObject } from "react-router";
import Dashboard from "views/dashboard/Dashboard";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/app/dashboard" />,
	},
	{
		path: "app",
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
	{
		path: "404",
		element: <>404</>,
	},
	{
		path: "*",
		element: <Navigate to="/404" />,
	},
];

export default routes;
