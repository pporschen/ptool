import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import ContentWrapper from "./components/content/ContentWrapper";

import AppDrawer from "./components/Drawer";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					padding: (theme) => theme.spacing(2),
					height: "100%",
				}}
			>
				<CssBaseline />
				<AppDrawer />
				<ContentWrapper />
			</Container>
		</ThemeProvider>
	);
}

export default App;
