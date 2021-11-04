import { routes, ThemeProvider } from "configs";
import { useRoutes } from "react-router-dom";
import { useAuth } from "./auth/login/context";

function App() {
  const { user } = useAuth();
  const elements = useRoutes(routes(Boolean(user)));
  return <ThemeProvider>{elements}</ThemeProvider>;
}

export default App;
