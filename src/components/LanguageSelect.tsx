import { Box, SelectChangeEvent } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import PointerSelect from './PointerControlled/PointerSelect';
import { AVAILABLE_LANGUAGES } from '../config/consts';

type LanguageSelectProps = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  pointerInputIsEnabled: boolean;
};

const LanguageSelect = ({
  language,
  setLanguage,
  pointerInputIsEnabled,
}: LanguageSelectProps) => {
  const { i18n } = useTranslation();

  const languageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    languageChange(event.target.value);
  };

  console.log(Object.keys(AVAILABLE_LANGUAGES));

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent={'flex-start'}
    >
      <PointerSelect
        buttonText="Change Language"
        pointerInputIsEnabled={pointerInputIsEnabled}
        label="Language"
        value={language}
        onChange={handleLanguageChange}
        itemAction={languageChange}
        items={AVAILABLE_LANGUAGES}
        name="language"
      />
    </Box>
  );
};

export default LanguageSelect;
