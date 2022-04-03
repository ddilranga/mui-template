import "configs/i18n";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import AuthWrapper from "./AuthWrapper";
import RoutesHolder from "./RoutesHolder";
import ThemeWrapper from "./ThemeWrapper";
import Toaster from "components/Notification";

Toaster.info({ message: "some message" });
Toaster.error({ message: "some message" });

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
