import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import PointerMenuItem from "./PointerControlled/PointerMenuItem";
import PointerButton from "./PointerControlled/PointerButton";
import { usePointerInputStatusStore } from "../stores/PointerInputStatusStore";
import { t } from "i18next";
import PointerSelect from "./PointerControlled/PointerSelect";

type LanguageSelectProps = {
	language: string;
	setLanguage: Dispatch<SetStateAction<string>>;
	pointerInputIsEnabled: boolean;
};

const LanguageSelect = ({ language, setLanguage, pointerInputIsEnabled }: LanguageSelectProps) => {
	const { i18n } = useTranslation();

	const languageChange = (lang: string) => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	const handleLanguageChange = (event: SelectChangeEvent) => {
		languageChange(event.target.value);
	};

	enum AvailableLanguages {
		EN = "en",
		DE = "de",
	}

	return (
		<Box display="flex" flexDirection="column" width="100%" justifyContent={"flex-start"}>
			<PointerSelect
				buttonText="Change Language"
				pointerInputIsEnabled={pointerInputIsEnabled}
				label="Language"
				value={language}
				onChange={handleLanguageChange}
				itemAction={languageChange}
				items={AvailableLanguages}
				name="language"
			/>
		</Box>
	);
};

export default LanguageSelect;
