import { Box } from "@mui/material";
import { t } from "i18next";
import PointerButton from "../PointerControlled/PointerButton";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { StyledCard } from "./ContentWrapper";
import { POINTER_DELAY } from "../../config/consts";
import { imageMap } from "../svgs";
import { BodyParts } from "./types";
import theme from "../../config/theme";

type ImageWrapperProps = {
	pointerInputIsEnabled: boolean;
	pointerCaptureIsEnabled: boolean;
	setPointerCaptureIsEnabled: Dispatch<SetStateAction<boolean>>;
	dots: Record<string, { x: number; y: number }>;
	setDots: Dispatch<SetStateAction<Record<string, { x: number; y: number }>>>;
	bodyPartToDisplay: BodyParts;
};

const ImageWrapper = ({
	pointerInputIsEnabled,
	pointerCaptureIsEnabled,
	setPointerCaptureIsEnabled,
	dots,
	setDots,
	bodyPartToDisplay,
}: ImageWrapperProps) => {
	const [currentPerspective, setCurrentPerspective] = useState(0);
	if (currentPerspective > imageMap[bodyPartToDisplay].length) {
		setCurrentPerspective(0);
	}

	const timer = useRef<NodeJS.Timeout | null>(null);
	const mousePositionRef = useRef<{ x: number; y: number } | null>(null);

	useEffect(() => {
		if (currentPerspective >= imageMap[bodyPartToDisplay].length) {
			setCurrentPerspective(0);
		}
	}, [bodyPartToDisplay, currentPerspective]);

	const currentBodyPart = imageMap[bodyPartToDisplay];
	const currentPerspectiveId = currentBodyPart[currentPerspective]?.id;

	const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		const svg = event.currentTarget;
		const pt = svg.createSVGPoint();
		pt.x = event.clientX;
		pt.y = event.clientY;
		const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
		mousePositionRef.current = { x: svgP.x, y: svgP.y };
	};

	const handleBodySVGClick = () => {
		console.log({ mousePosition: mousePositionRef.current });
		if (!mousePositionRef.current) return;
		setDots((prev) => ({
			...prev,
			[currentPerspectiveId]: { x: mousePositionRef.current!.x, y: mousePositionRef.current!.y },
		}));
	};

	const handleActivePointerCaptureEntry = () => {
		if (pointerCaptureIsEnabled) {
			if (timer.current) {
				clearTimeout(timer.current);
				timer.current = null;
			}

			timer.current = setTimeout(handleBodySVGClick, POINTER_DELAY);
		}
	};

	const handleActivePointerCaptureExit = () => {
		if (timer.current) {
			clearTimeout(timer.current);
			timer.current = null;
		}
		//
		setPointerCaptureIsEnabled(false);
	};

	return (
		<StyledCard sx={{ width: "70vw", minHeight: "700px", minWidth: "700px" }}>
			<Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, width: "100%" }}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: theme.spacing(2), minHeight: "700px" }}>
					{currentBodyPart.map((perspective, index) => (
						<PointerButton
							pointerInputIsEnabled={pointerInputIsEnabled}
							key={index}
							onClick={() => setCurrentPerspective(index)}
							variant="contained"
							color={currentPerspective === index ? "secondary" : "primary"}
							sx={{ marginTop: (theme) => theme.spacing(1) }}
						>
							{t(perspective.name)}
						</PointerButton>
					))}
				</Box>
				<Box
					sx={{
						justifyContent: "center",
						alignItems: "center",
						flexGrow: 1,
						height: "100%",
						cursor: "crosshair",
					}}
				>
					{currentBodyPart[currentPerspective]?.svg({
						dot: dots[currentPerspectiveId],
						onClick: handleBodySVGClick,
						onMouseEnter: handleActivePointerCaptureEntry,
						onMouseMove: handleMouseMove,
						onMouseLeave: handleActivePointerCaptureExit,
					})}
				</Box>
			</Box>
		</StyledCard>
	);
};

export default ImageWrapper;
