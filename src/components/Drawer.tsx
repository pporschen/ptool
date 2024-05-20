import { Settings } from "@mui/icons-material";
import { Fab, Box, List, ListItem, styled, Drawer } from "@mui/material";
import { t } from "i18next";
import theme from "../config/theme";
import LanguageSelect from "./LanguageSelect";
import PointerButton from "./PointerControlled/PointerButton";
import { useState } from "react";
import i18n from "../i18n";
import { usePointerInputStatusStore } from "../stores/PointerInputStatusStore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const AppDrawer = () => {
	const [language, setLanguage] = useState(i18n.language);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const { pointerInputIsEnabled, setPointerInputIsEnabled } = usePointerInputStatusStore((state) => state);

	const handlePointerInputToggle = () => {
		setPointerInputIsEnabled(!pointerInputIsEnabled);
	};
	return (
		<>
			<Fab
				aria-label="pointerActivvity"
				size="large"
				sx={{ position: "absolute", bottom: theme.spacing(11), left: theme.spacing(3) }}
				disabled
			>
				{pointerInputIsEnabled ? <VisibilityIcon /> : <VisibilityOffIcon />}
			</Fab>
			<Fab
				color="secondary"
				aria-label="add"
				size="large"
				sx={{ position: "absolute", bottom: theme.spacing(3), left: theme.spacing(3) }}
				onMouseEnter={() => setDrawerOpen(true)}
			>
				<Settings />
			</Fab>
			<Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} sx={{ width: "30vw" }}>
				<Box width={"300px"}>
					<Logo>painpointer</Logo>
					<List sx={{ display: "flex", flexDirection: "column", height: "90vh" }}>
						<ListItem>
							<LanguageSelect
								pointerInputIsEnabled={pointerInputIsEnabled}
								language={language}
								setLanguage={setLanguage}
							/>
						</ListItem>
						<ListItem sx={{ marginTop: "auto" }}>
							<PointerButton
								pointerInputIsEnabled
								variant="contained"
								color="secondary"
								onClick={handlePointerInputToggle}
								fullWidth
							>
								{pointerInputIsEnabled ? t("Disable Pointer Input") : t("Enable Pointer Input")}
							</PointerButton>
						</ListItem>
						<ListItem>
							<PointerButton
								pointerInputIsEnabled={pointerInputIsEnabled}
								variant="contained"
								onClick={() => setDrawerOpen(false)}
								fullWidth
							>
								{t("Close")}
							</PointerButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default AppDrawer;

const Logo = styled(Box)`
	font-size: 1.5em;
	font-family: "Poetsen One", sans-serif;
	background: ${({ theme }) =>
		`linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: ${({ theme }) => theme.spacing(2)};
`;
