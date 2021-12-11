import { routes, ThemeProvider } from "configs";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";

function App() {
  const { autoLogin } = useAuth();

  useEffect(() => {
    autoLogin();
  }, []);

  const elements = useRoutes(routes);
  return <ThemeProvider>{elements}</ThemeProvider>;
}

export default App;
