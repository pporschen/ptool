import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";
import LanguageSelect from "./LanguageSelect";
import { Dispatch, SetStateAction } from "react";
import theme from "../config/theme";
import { usePointerInputStatusStore } from "../stores/PointerInputStatusStore";
import PointerButton from "./PointerControlled/PointerButton";
import { t } from "i18next";
type HeaderProps = {
	language: string;
	setLanguage: Dispatch<SetStateAction<string>>;
};
const Header = ({ language, setLanguage }: HeaderProps) => {
	return (
		<StyledAppBar position="static">
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Logo>painpointer.io</Logo>
				<Box display="flex" alignItems="baseline">
					<LanguageSelect language={language} setLanguage={setLanguage} />
				</Box>
			</Toolbar>
		</StyledAppBar>
	);
};

export default Header;

const Logo = styled(Box)`
	font-size: 1.5em;
	font-family: "Poetsen One", sans-serif;
	background: ${({ theme }) =>
		`linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: ${({ theme }) => theme.spacing(2)};
`;

const StyledAppBar = styled(AppBar)`
	background-color: ${({ theme }) => theme.palette.common.white};
`;
