import { routes, ThemeProvider } from "configs";
import { useRoutes } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";

function App() {
  const elements = useRoutes(routes);

  return (
    <ThemeProvider>
      <AuthWrapper>{elements}</AuthWrapper>
    </ThemeProvider>
  );
}

export default App;
