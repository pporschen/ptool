import { AppBar, ThemeProvider, styled } from "@mui/material";
import Box from "@mui/material/Box";
import theme from "./consts/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<StyledAppBar position="static">
					<Logo>painpointer.io</Logo>
				</StyledAppBar>
			</Box>
		</ThemeProvider>
	);
}

export default App;

const Logo = styled(Box)`
	font-size: 1.5em;
	font-family: "Poetsen One", sans-serif;
	background: linear-gradient(to right, #20b2aa, #e303cd);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: ${({ theme }) => theme.spacing(2)};
`;

const StyledAppBar = styled(AppBar)`
	background-color: ${({ theme }) => theme.palette.background.default};
`;
