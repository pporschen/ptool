import { Close } from "@mui/icons-material";
import { head } from "lodash";
import FootBottom from "../components/svgs/Feet/FootBottom";

const resources = {
	en: {
		translation: {
			Right: "Right",
			Left: "Left",
			Front: "Front",
			Back: "Back",
			Top: "Top",
			Bottom: "Bottom",

			"Open Body Part Select": "Open Body Part Select",
			"Open Pain Level Select": "Open Pain Level Select",
			"Open Pain Source Select": "Open Pain Source Select",
			"Open Language Select": "Open Language Select",
			"Change Language": "Change Language",
			"Start Pointer Capture": "Start Pointer Capture",
			"Disable Pointer Input": "Disable Pointer Input",
			"Enable Pointer Input": "Enable Pointer Input",
			"Reset Points": "Reset Points",
			"Stop Pointer Capture": "Stop Pointer Capture",

			Language: "Language",
			Close: "Close",

			"Body Part": "Body Part",
			"Pain Level": "Pain Level",
			"Pain Source": "Pain Source",

			// Body parts
			malePart: "Full Body Male",
			femalePart: "Full Body Female",
			headPart: "Head",
			FootPart: "Feet",
			HandPart: "Hands",

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
			Bottom: "Unten",

			"Open Body Part Select": "Körperteil auswählen",
			"Open Pain Level Select": "Schmerzlevel auswählen",
			"Open Pain Source Select": "Schmerzquelle auswählen",
			"Open Language Select": "Sprache auswählen",
			"Change Language": "Sprache ändern",
			"Start Pointer Capture": "Pointer-Erfassung starten",
			"Disable Pointer Input": "Pointer-Steuerung deaktivieren",
			"Enable Pointer Input": "Pointer-Steuerung aktivieren",
			"Reset Points": "Markierungen zurücksetzen",
			"Stop Pointer Capture": "Pointer-Erfassung stoppen",

			"Body Part": "Körperteil",
			"Pain Level": "Schmerzlevel",
			"Pain Source": "Schmerzquelle",
			Language: "Sprache",
			Close: "Schließen",

			// Body parts
			malePart: "Ganzer Körper männlich",
			femalePart: "Ganzer Körper weiblich",
			headPart: "Kopf",
			footPart: "Füße",
			handPart: "Hände",

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
