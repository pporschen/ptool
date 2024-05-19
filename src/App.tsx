import { Box, Container, CssBaseline, ThemeProvider, makeStyles, styled } from "@mui/material";
import theme from "./config/theme";
import Header from "./components/Header";
import ContentWrapper from "./components/content/ContentWrapper";
import { useEffect, useState } from "react";
import i18n from "./i18n";

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
				{/* <Logo>painpointer.info</Logo> */}
				<ContentWrapper />
			</Container>
		</ThemeProvider>
	);
}

export default App;

const Logo = styled(Box)`
	font-size: 1.5em;
	font-family: "Poetsen One", sans-serif;
	background: ${({ theme }) =>
		`linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: ${({ theme }) => theme.spacing(2)};
	position: fixed;
	bottom: 200px;
	left: -85px;
	transform: rotate(-90deg);
	z-index: -1;
`;
