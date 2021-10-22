import { routes, ThemeProvider } from "configs";
import { useRoutes } from "react-router-dom";
import { useAuth } from "./auth/login/context";
import { Provider } from "react-redux";
import { store } from "store";

function App() {
  const { user } = useAuth();
  const elements = useRoutes(routes(Boolean(user)));
  return (
    <ThemeProvider>
      <Provider store={store}>{elements}</Provider>
    </ThemeProvider>
  );
}

export default App;
