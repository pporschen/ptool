import { Box, Container, CssBaseline, ThemeProvider, makeStyles, styled } from "@mui/material";
import theme from "./config/theme";
import Header from "./components/Header";
import ContentWrapper from "./components/content/ContentWrapper";
import { useEffect, useState } from "react";
import i18n from "./i18n";

function App() {
	const [language, setLanguage] = useState(i18n.language);
	console.log(language);

	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					minHeight: "768px",
					minWidth: "1024px",
					padding: (theme) => theme.spacing(2),
					height: "100%",
				}}
			>
				<CssBaseline />
				<Logo>painpointer.io</Logo>
				<ContentWrapper />
			</Container>
		</ThemeProvider>
	);
}

export default App;

const Logo = styled(Box)`
	font-size: 1.5em;
	margin: ${({ theme }) => theme.spacing(2)};
	font-family: "Poetsen One", sans-serif;
	background: ${({ theme }) =>
		`linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: ${({ theme }) => theme.spacing(2)};
	position: fixed;
	bottom: 65px;
	left: -65px;
	transform: rotate(-90deg);
	z-index: -1;
`;
