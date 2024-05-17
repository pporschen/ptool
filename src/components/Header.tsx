import { AppBar, Box, styled } from "@mui/material";

const Header = () => {
	return (
		<StyledAppBar position="static">
			<Logo>painpointer.io</Logo>
		</StyledAppBar>
	);
};

export default Header;

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
