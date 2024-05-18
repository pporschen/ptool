import {
	Box,
	Button,
	Card,
	CardActions,
	Container,
	Divider,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	styled,
} from "@mui/material";
import Front from "./svgs/Front";
import Back from "./svgs/Back";
import Left from "./svgs/Left";
import Right from "./svgs/Right";
import { ReactNode, useState } from "react";
import { t } from "i18next";
import GazeButton from "./GazeButton";
import { useGazeInputStatusStore } from "../stores/GazeInputStatusStore";

enum PainLevels {
	none = 0,
	mild = 1,
	moderate = 2,
	severe = 3,
}

enum BodyParts {
	fullBody,
	head,
	teeth,
	eye,
	feet,
	hands,
}

type FormData = {
	painLevel: PainLevels;
	bodyPart: BodyParts;
};

const ContentWrapper = () => {
	const [currentPerspective, setCurrentPerspective] = useState(0);
	const [formData, setFormData] = useState<FormData>({ painLevel: PainLevels.none, bodyPart: BodyParts.fullBody });
	const [selectIsOpen, setSelectIsOpen] = useState({ painLevel: false, bodyPart: false });
	const gazeInputIsEnabled = useGazeInputStatusStore((state) => state.gazeInputIsEnabled);

	const perspectives = [
		{ name: "Front", svg: <Front /> },
		{ name: "Right", svg: <Right /> },
		{ name: "Back", svg: <Back /> },
		{ name: "Left", svg: <Left /> },
	];

	const handleFormChange = (e: SelectChangeEvent<unknown>, _: ReactNode) => {
		const { name, value } = e.target;
		console.log(e.target);
		setFormData({ ...formData, [name]: value });
	};

	const handleSelectOpen = (name: string) => {
		setSelectIsOpen({ ...selectIsOpen, [name]: true });
		Object.keys(selectIsOpen).forEach((key) => {
			if (key !== name) {
				setSelectIsOpen((prevState) => ({ ...prevState, [key]: false }));
			}
		});
	};

	const handleSelectClose = (name: string) => {
		setSelectIsOpen({ ...selectIsOpen, [name]: false });
	};

	return (
		<Box
			sx={{ margin: (theme) => theme.spacing(3), height: () => `calc(100vh - 120px)`, overflow: "auto" }}
			display="flex"
			gap={2}
			justifyContent={"center"}
		>
			<StyledCard sx={{ width: "600px" }}>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
						{perspectives.map((perspective, index) => (
							<GazeButton
								gazeInputIsEnabled={gazeInputIsEnabled}
								key={index}
								onClick={() => setCurrentPerspective(index)}
								variant="contained"
								color={currentPerspective === index ? "secondary" : "primary"}
								sx={{ marginTop: (theme) => theme.spacing(1) }}
							>
								{t(perspective.name)}
							</GazeButton>
						))}
					</Box>
					<Box sx={{ justifyContent: "center", alignItems: "center", flexGrow: 1, height: "700px" }}>
						{perspectives[currentPerspective].svg}
					</Box>
				</Box>
			</StyledCard>
			<StyledCard sx={{ width: "400px" }}>
				<GazeButton
					gazeInputIsEnabled={gazeInputIsEnabled}
					variant="contained"
					color="primary"
					sx={{ marginButtom: (theme) => theme.spacing(3) }}
					onClick={() => handleSelectOpen("bodyPart")}
				>
					{t("Open Body Part Select")}
				</GazeButton>
				<FormControl fullWidth margin="normal">
					<InputLabel id="body-part-label">{t("Body Part")}</InputLabel>
					<Select
						labelId="body-part-label"
						id="body-part-select"
						value={formData.bodyPart.toString()}
						name="bodyPart"
						label={t("Body Part")}
						onChange={handleFormChange}
						open={selectIsOpen.bodyPart}
						onOpen={() => handleSelectOpen("bodyPart")}
						onClose={() => handleSelectClose("bodyPart")}
					>
						<MenuItem value={BodyParts.fullBody}>{t("Full Body")}</MenuItem>
						<MenuItem value={BodyParts.head}>{t("Head")}</MenuItem>
						<MenuItem value={BodyParts.teeth}>{t("Teeth")}</MenuItem>
						<MenuItem value={BodyParts.eye}>{t("Eye")}</MenuItem>
						<MenuItem value={BodyParts.feet}>{t("Feet")}</MenuItem>
						<MenuItem value={BodyParts.hands}>{t("Hands")}</MenuItem>
					</Select>
				</FormControl>
				<GazeButton
					gazeInputIsEnabled={gazeInputIsEnabled}
					variant="contained"
					color="primary"
					sx={{ marginTop: (theme) => theme.spacing(2) }}
					onClick={() => handleSelectOpen("painLevel")}
				>
					{t("Open Pain Level Select")}
				</GazeButton>
				<FormControl fullWidth margin="normal">
					<InputLabel id="pain-level-label">{t("Pain Level")}</InputLabel>
					<Select
						labelId="pain-level-label"
						id="pain-level-select"
						value={formData.painLevel.toString()}
						name="painLevel"
						label={t("Pain Level")}
						onChange={handleFormChange}
						open={selectIsOpen.painLevel}
						onOpen={() => handleSelectOpen("painLevel")}
						onClose={() => handleSelectClose("painLevel")}
					>
						<MenuItem value={PainLevels.none}>{t("Itch")}</MenuItem>
						<MenuItem value={PainLevels.mild}>{t("Mild Pain")}</MenuItem>
						<MenuItem value={PainLevels.moderate}>{t("Moderate Pain")}</MenuItem>
						<MenuItem value={PainLevels.severe}>{t("Severe Pain")}</MenuItem>
					</Select>
				</FormControl>
				<Divider sx={{ flexGrow: 1 }} />
				<GazeButton
					gazeInputIsEnabled={gazeInputIsEnabled}
					variant="contained"
					color="primary"
					sx={{ marginTop: (theme) => theme.spacing(2) }}
					fullWidth
					onClick={() => console.log(formData)}
				>
					{t("Start Pointer Capture")}
				</GazeButton>
				<GazeButton
					gazeInputIsEnabled={gazeInputIsEnabled}
					onClick={() => console.log("Export PDF")}
					variant="contained"
					color="primary"
					sx={{ marginTop: (theme) => theme.spacing(2) }}
					fullWidth
				>
					{t("Export PDF")}
				</GazeButton>
			</StyledCard>
		</Box>
	);
};

export default ContentWrapper;

const StyledCard = styled(Card)`
	padding: ${({ theme }) => theme.spacing(3)};
	display: flex;
	flex-direction: column;
`;
