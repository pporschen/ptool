import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./consts/theme";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<CssBaseline />
				<Header />
				<ContentWrapper />
			</>
		</ThemeProvider>
	);
}

export default App;
