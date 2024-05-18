import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./config/translations";
import LanguageDetector from "i18next-browser-languagedetector";

const formatBrowserLanguage = (lng: string) => {
	if (lng.includes("-")) {
		return lng.split("-")[0];
	}
	return lng;
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		supportedLngs: ["de", "en"],
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain"],
			caches: ["localStorage"],
			convertDetectedLanguage: formatBrowserLanguage,
		},
	});

export default i18n;
