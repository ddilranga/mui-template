import { routes, ThemeProvider } from "configs";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

function App() {
  const { autoLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = autoLogin();

    if (isAuthenticated) navigate(location.pathname);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const elements = useRoutes(routes);
  return <ThemeProvider>{elements}</ThemeProvider>;
}

export default App;
