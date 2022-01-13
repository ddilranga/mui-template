import { useRoutes } from "react-router-dom";
import routes from "routes";

const RoutesHolder = () => {
  const elements = useRoutes(routes);

  return elements;
};

export default RoutesHolder;
