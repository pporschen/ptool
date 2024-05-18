import { Box } from "@mui/material";
import { t } from "i18next";
import PointerButton from "../PointerControlled/PointerButton";
import Back from "../svgs/Back";
import Front from "../svgs/Front";
import Left from "../svgs/Left";
import Right from "../svgs/Right";
import { useState } from "react";
import { StyledCard } from "./ContentWrapper";

type ImageWrapperProps = {
	pointerInputIsEnabled: boolean;
};

const perspectives = [
	{ name: "Front", svg: Front, id: "front" },
	{ name: "Right", svg: Right, id: "right" },
	{ name: "Back", svg: Back, id: "back" },
	{ name: "Left", svg: Left, id: "left" },
];
type Dot = { x: number; y: number };
type DotSource = string;

const ImageWrapper = ({ pointerInputIsEnabled }: ImageWrapperProps) => {
	const [currentPerspective, setCurrentPerspective] = useState(0);
	const [dots, setDots] = useState<Record<DotSource, Dot>>({});
	const currentPerspectiveId = perspectives[currentPerspective].id;

	const handleBodySVGClick = (dotSource: DotSource) => (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		const svg = event.currentTarget;
		const pt = svg.createSVGPoint();
		pt.x = event.clientX;
		pt.y = event.clientY;
		const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
		setDots((prev) => ({ ...prev, [dotSource]: { x: svgP.x, y: svgP.y } }));
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
				<Box sx={{ justifyContent: "center", alignItems: "center", flexGrow: 1, height: "800px", width: "400px" }}>
					{perspectives[currentPerspective].svg({
						dot: dots[currentPerspectiveId],
						onClick: handleBodySVGClick(currentPerspectiveId),
					})}
				</Box>
			</Box>
		</StyledCard>
	);
};

export default ImageWrapper;
