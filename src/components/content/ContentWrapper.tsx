import { Box, Card, styled } from "@mui/material";
import { useState } from "react";
import { usePointerInputStatusStore } from "../../stores/PointerInputStatusStore";
import ImageWrapper from "./ImageWrapper";
import OptionsWrapper from "./OptionsWrapper";
import { BodyParts, PainLevels, FormData, PainSources } from "./types";

type Dot = { x: number; y: number };
type DotSource = "front" | "right" | "back" | "left" | "top";

const ContentWrapper = () => {
	const { pointerInputIsEnabled } = usePointerInputStatusStore((state) => state);
	const [pointerCaptureIsEnabled, setPointerCaptureIsEnabled] = useState(false);
	const [dots, setDots] = useState<Record<DotSource, Dot> | {}>({});
	const [formData, setFormData] = useState<FormData>({
		painLevel: PainLevels.none,
		bodyPart: BodyParts.male,
		painSource: PainSources.none,
	});

	return (
		<Box display="flex" gap={2} justifyContent={"center"} height={"100%"} minHeight={"700px"}>
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
