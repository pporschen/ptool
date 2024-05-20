import { Close } from "@mui/icons-material";
import { head } from "lodash";

const resources = {
	en: {
		translation: {
			Right: "Right",
			Left: "Left",
			Front: "Front",
			Back: "Back",
			Top: "Top",

			"Open Body Part Select": "Open Body Part Select",
			"Open Pain Level Select": "Open Pain Level Select",
			"Open Language Select": "Open Language Select",
			"Start Pointer Capture": "Start Pointer Capture",
			"Disable Pointer Input": "Disable Pointer Input",
			"Enable Pointer Input": "Enable Pointer Input",
			"Reset Points": "Reset Points",
			"Stop Pointer Capture": "Stop Pointer Capture",

			Language: "Language",
			Close: "Close",

			"Body Part": "Body Part",
			"Pain Level": "Pain Level",

			// Body parts
			malePart: "Full Body Male",
			femalePart: "Full Body Female",
			headPart: "Head",

			// Pain levels
			noneLevel: "None",
			mildLevel: "Mild Pain",
			moderateLevel: "Moderate Pain",
			severeLevel: "Severe Pain",
			itchLevel: "Itch",

			// Languages
			en: "English",
			de: "Deutsch",

			// Pain sources
			noneSource: "None",
			skinSource: "Skin",
			muscleSource: "Muscle",
			boneSource: "Bone",
			organSource: "Organ",
			jointSource: "Joint",
			nerveSource: "Nerve",
			crampSource: "Cramp",
		},
	},
	de: {
		translation: {
			Right: "Rechts",
			Left: "Links",
			Front: "Vorne",
			Back: "Hinten",
			Top: "Oben",

			"Open Body Part Select": "Körperteil auswählen",
			"Open Pain Level Select": "Schmerzlevel auswählen",
			"Open Language Select": "Sprache auswählen",
			"Start Pointer Capture": "Pointer-Erfassung starten",
			"Disable Pointer Input": "Pointer-Steuerung deaktivieren",
			"Enable Pointer Input": "Pointer-Steuerung aktivieren",
			"Reset Points": "Markierungen zurücksetzen",
			"Stop Pointer Capture": "Pointer-Erfassung stoppen",

			"Body Part": "Körperteil",
			"Pain Level": "Schmerzlevel",
			Language: "Sprache",
			Close: "Schließen",

			// Body parts
			malePart: "Ganzer Körper männlich",
			femalePart: "Ganzer Körper weiblich",
			headPart: "Kopf",

			// Pain levels
			noneLevel: "Keine Angabe",
			mildLevel: "Leichte Schmerzen",
			moderateLevel: "Mittlere Schmerzen",
			severeLevel: "Starke Schmerzen",
			itchLevel: "Juckreiz",

			// Pain sources
			noneSource: "Keine Angabe",
			skinSource: "Haut",
			muscleSource: "Muskel",
			boneSource: "Knochen",
			organSource: "Organ",
			jointSource: "Gelenk",
			nerveSource: "Nerv",
			crampSource: "Krampf",
		},
	},
};

export default resources;
