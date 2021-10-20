import { routes, ThemeProvider } from "configs";
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./auth/login/context";

function App() {
  const elements = useRoutes(routes);
  return (
    <ThemeProvider>
      <AuthProvider>{elements}</AuthProvider>
    </ThemeProvider>
  );
}

export default App;
