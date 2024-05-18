import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type LanguageSelectProps = {
	language: string;
	setLanguage: Dispatch<SetStateAction<string>>;
};

const LanguageSelect = ({ language, setLanguage }: LanguageSelectProps) => {
	const { i18n } = useTranslation();

	const handleLanguageChange = (event: SelectChangeEvent) => {
		setLanguage(event.target.value);
		i18n.changeLanguage(event.target.value);
	};

	return (
		<Select value={language} onChange={handleLanguageChange} sx={{ minWidth: "8rem" }}>
			<MenuItem value="en">English</MenuItem>
			<MenuItem value="de">Deutsch</MenuItem>
		</Select>
	);
};

export default LanguageSelect;
