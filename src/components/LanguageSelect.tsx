import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import PointerMenuItem from "./PointerControlled/PointerMenuItem";
import PointerButton from "./PointerControlled/PointerButton";
import { usePointerInputStatusStore } from "../stores/PointerInputStatusStore";
import { t } from "i18next";

type LanguageSelectProps = {
	language: string;
	setLanguage: Dispatch<SetStateAction<string>>;
	pointerInputIsEnabled: boolean;
};

const LanguageSelect = ({ language, setLanguage, pointerInputIsEnabled }: LanguageSelectProps) => {
	const { i18n } = useTranslation();
	const [selectIsOpen, setSelectIsOpen] = useState(false);

	const languageChange = (lang: string) => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
		setSelectIsOpen(false);
	};

	const handleLanguageChange = (event: SelectChangeEvent) => {
		languageChange(event.target.value);
	};

	const availableLanguages = [
		{ value: "en", label: "English" },
		{ value: "de", label: "Deutsch" },
	];

	const handleSelectOpen = () => {
		setSelectIsOpen(true);
	};

	return (
		<Box display="flex" flexDirection="column" width="100%" justifyContent={"flex-start"}>
			<PointerButton
				pointerInputIsEnabled={pointerInputIsEnabled}
				variant="contained"
				color="primary"
				onClick={handleSelectOpen}
			>
				{t("Open Language Select")}
			</PointerButton>
			<FormControl fullWidth margin="normal">
				<InputLabel id="body-part-label">{t("Body Part")}</InputLabel>
				<Select value={language} onChange={handleLanguageChange} fullWidth open={selectIsOpen} label={t("Language")}>
					{availableLanguages.map((lang) => (
						<PointerMenuItem
							key={lang.value}
							value={lang.value}
							action={() => languageChange(lang.value)}
							pointerInputIsEnabled={pointerInputIsEnabled}
						>
							{lang.label}
						</PointerMenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default LanguageSelect;
