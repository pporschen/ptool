import { Box } from "@mui/material";
import { t } from "i18next";
import PointerButton from "../PointerControlled/PointerButton";
import Back from "../svgs/Back";
import Front from "../svgs/Front";
import Left from "../svgs/Left";
import Right from "../svgs/Right";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { StyledCard } from "./ContentWrapper";
import { set } from "lodash";
import { POINTER_DELAY } from "../../config/consts";

type ImageWrapperProps = {
	pointerInputIsEnabled: boolean;
	pointerCaptureIsEnabled: boolean;
	setPointerCaptureIsEnabled: Dispatch<SetStateAction<boolean>>;
	dots: Record<string, { x: number; y: number }>;
	setDots: Dispatch<SetStateAction<Record<string, { x: number; y: number }>>>;
};

const perspectives = [
	{ name: "Front", svg: Front, id: "front" },
	{ name: "Right", svg: Right, id: "right" },
	{ name: "Back", svg: Back, id: "back" },
	{ name: "Left", svg: Left, id: "left" },
];

const ImageWrapper = ({
	pointerInputIsEnabled,
	pointerCaptureIsEnabled,
	setPointerCaptureIsEnabled,
	dots,
	setDots,
}: ImageWrapperProps) => {
	const [currentPerspective, setCurrentPerspective] = useState(0);

	const currentPerspectiveId = perspectives[currentPerspective].id;
	const timer = useRef<NodeJS.Timeout | null>(null);
	const mousePositionRef = useRef<{ x: number; y: number } | null>(null);

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
		<StyledCard sx={{ minWidth: "600px", width: "60%", minHeight: "800px" }}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					{perspectives.map((perspective, index) => (
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
						height: "800px",
						width: "400px",
						cursor: "crosshair",
					}}
				>
					{perspectives[currentPerspective].svg({
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
