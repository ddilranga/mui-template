import { routes, ThemeProvider } from "configs";
import { useAuth } from "hooks";
import { useRoutes } from "react-router-dom";

function App() {
  const { user } = useAuth();
  const elements = useRoutes(routes(Boolean(user)));
  return <ThemeProvider>{elements}</ThemeProvider>;
}

export default App;
