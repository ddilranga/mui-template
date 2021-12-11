import { RouteObject, Navigate } from "react-router-dom";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";
import sharedRoutes from "./routes/sharedRoutes";

const routes: RouteObject[] = [
  ...privateRoutes,
  ...publicRoutes,
  ...sharedRoutes,
];

export default routes;
