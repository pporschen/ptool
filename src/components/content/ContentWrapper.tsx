import { Box, Card, Fab, styled } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { usePointerInputStatusStore } from "../../stores/PointerInputStatusStore";
import ImageWrapper from "./ImageWrapper";
import OptionsWrapper from "./OptionsWrapper";
import { BodyParts, PainLevels, FormData, PainSources } from "./types";
import { Settings } from "@mui/icons-material";
import theme from "../../config/theme";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export type Dot = { x: number; y: number; isMirrored?: boolean };
type DotSource = string;

export type DotsState = Record<DotSource, Dot>;

type ContentWrapperProps = {
	setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const ContentWrapper = ({ setDrawerOpen }: ContentWrapperProps) => {
	const { pointerInputIsEnabled } = usePointerInputStatusStore((state) => state);
	const [pointerCaptureIsEnabled, setPointerCaptureIsEnabled] = useState(false);
	const [dots, setDots] = useState<DotsState | {}>({});
	const [formData, setFormData] = useState<FormData>({
		painLevel: PainLevels.none,
		bodyPart: BodyParts.male,
		painSource: PainSources.none,
	});

	return (
		<Box display="flex" gap={2} justifyContent={"center"} height={"100%"} minHeight={"700px"} minWidth={"1000px"}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: theme.spacing(1),
					justifyContent: "flex-end",
				}}
			>
				<Fab size="large" disabled>
					{pointerInputIsEnabled ? <VisibilityIcon /> : <VisibilityOffIcon />}
				</Fab>
				<Fab color="secondary" aria-label="add" size="large" onMouseEnter={() => setDrawerOpen(true)}>
					<Settings />
				</Fab>
			</Box>
			<ImageWrapper
				pointerInputIsEnabled={pointerInputIsEnabled}
				pointerCaptureIsEnabled={pointerCaptureIsEnabled}
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
