import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import { useEffect, useState } from "react";
import i18n from "./i18n";

function App() {
	const [language, setLanguage] = useState(i18n.language);
	console.log(language);

	return (
		<ThemeProvider theme={theme}>
			<>
				<CssBaseline />
				<Header language={language} setLanguage={setLanguage} />
				<ContentWrapper />
			</>
		</ThemeProvider>
	);
}

export default App;
