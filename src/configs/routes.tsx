import { RouteObject } from "react-router";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";
import sharedRoutes from "./routes/sharedRoutes";

const routes: RouteObject[] = [
  ...privateRoutes,
  ...publicRoutes,
  ...sharedRoutes,
];

export default routes;
