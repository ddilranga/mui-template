import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import AuthWrapper from "./AuthWrapper";
import RoutesHolder from "./RoutesHolder";
import ThemeWrapper from "./ThemeWrapper";
import "configs/i18n";

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ThemeWrapper>
          <AuthWrapper>
            <RoutesHolder />
          </AuthWrapper>
        </ThemeWrapper>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
