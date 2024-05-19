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
import Front from "../svgs/Front";
import Back from "../svgs/Back";
import Left from "../svgs/Left";
import Right from "../svgs/Right";
import { ReactNode, useState } from "react";
import { t } from "i18next";
import PointerButton from "../PointerControlled/PointerButton";
import { usePointerInputStatusStore } from "../../stores/PointerInputStatusStore";
import PointerMenuItem from "../PointerControlled/PointerMenuItem";
import ImageWrapper from "./ImageWrapper";
import OptionsWrapper from "./OptionsWrapper";
import { BodyParts, PainLevels, FormData } from "./types";

type Dot = { x: number; y: number };
type DotSource = "front" | "right" | "back" | "left";

const ContentWrapper = () => {
	const { pointerInputIsEnabled } = usePointerInputStatusStore((state) => state);
	const [pointerCaptureIsEnabled, setPointerCaptureIsEnabled] = useState(false);
	const [dots, setDots] = useState<Record<DotSource, Dot> | {}>({});
	const [formData, setFormData] = useState<FormData>({ painLevel: PainLevels.none, bodyPart: BodyParts.male });

	return (
		<Box display="flex" gap={2} justifyContent={"center"} height={"100%"}>
			<ImageWrapper
				pointerInputIsEnabled={pointerInputIsEnabled}
				pointerCaptureIsEnabled={pointerCaptureIsEnabled}
				setPointerCaptureIsEnabled={setPointerCaptureIsEnabled}
				dots={dots}
				setDots={setDots}
				bodyPartToDisplay={formData.bodyPart}
			/>
			<OptionsWrapper
				pointerCaptureIsEnabled={pointerCaptureIsEnabled}
				pointerInputIsEnabled={pointerInputIsEnabled}
				setPointerCaptureIsEnabled={setPointerCaptureIsEnabled}
				setDots={setDots}
				formData={formData}
				setFormData={setFormData}
			/>
		</Box>
	);
};

export default ContentWrapper;

export const StyledCard = styled(Card)`
	padding: ${({ theme }) => theme.spacing(3)};
	display: flex;
	flex-direction: column;
`;
