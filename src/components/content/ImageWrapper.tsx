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
	{ name: "Front", svg: <Front /> },
	{ name: "Right", svg: <Right /> },
	{ name: "Back", svg: <Back /> },
	{ name: "Left", svg: <Left /> },
];

const ImageWrapper = ({ pointerInputIsEnabled }: ImageWrapperProps) => {
	const [currentPerspective, setCurrentPerspective] = useState(0);

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
					{perspectives[currentPerspective].svg}
				</Box>
			</Box>
		</StyledCard>
	);
};

export default ImageWrapper;
