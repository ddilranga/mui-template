import { Layout, ThemeProvider } from "configs";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
