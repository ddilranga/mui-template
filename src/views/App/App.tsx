import { routes } from "configs";
import { useRoutes } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import ThemeWrapper from "./ThemeWrapper";

function App() {
  const elements = useRoutes(routes);

  return (
    <ThemeWrapper>
      <AuthWrapper>{elements}</AuthWrapper>
    </ThemeWrapper>
  );
}

export default App;
