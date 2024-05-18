import { AppBar, Box, Toolbar, styled } from "@mui/material";
import LanguageSelect from "./LanguageSelect";
import { Dispatch, SetStateAction } from "react";
type HeaderProps = {
	language: string;
	setLanguage: Dispatch<SetStateAction<string>>;
};
const Header = ({ language, setLanguage }: HeaderProps) => {
	return (
		<StyledAppBar position="static">
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Logo>painpointer.io</Logo>
				<LanguageSelect language={language} setLanguage={setLanguage} />
			</Toolbar>
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
	background-color: ${({ theme }) => theme.palette.common.white};
`;
