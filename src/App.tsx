import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import ContentWrapper from "./components/content/ContentWrapper";

import AppDrawer from "./components/Drawer";
import i18n from "./i18n";
import { useState } from "react";

function App() {
	const [language, setLanguage] = useState(i18n.language);

	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					padding: (theme) => theme.spacing(2),
					height: "100%",
				}}
			>
				<CssBaseline />
				<AppDrawer language={language} setLanguage={setLanguage} />
				<ContentWrapper />
			</Container>
		</ThemeProvider>
	);
}

export default App;
