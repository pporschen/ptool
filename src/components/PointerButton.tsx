import { Button, ButtonProps, LinearProgress } from "@mui/material";
import { useRef, useState } from "react";
import usePointerControl from "../hooks/usePointerControl";

type PointerButtonProps = {
	pointerInputIsEnabled: boolean;
	onClick: () => void;
} & ButtonProps;

const PointerButton = ({ pointerInputIsEnabled, onClick, ...props }: PointerButtonProps) => {
	const { isDwelling, dwellingDelayPassed, handlePointerEntry, handlePointerLeave, dwellingProgress } =
		usePointerControl({ onClick, pointerInputIsEnabled });

	return (
		<Button onClick={onClick} onMouseEnter={handlePointerEntry} onMouseLeave={handlePointerLeave} {...props}>
			{isDwelling && dwellingDelayPassed && (
				<LinearProgress variant="determinate" value={dwellingProgress} color="secondary" sx={{ width: "100%" }} />
			)}
			{(!isDwelling || !dwellingDelayPassed) && props.children}
		</Button>
	);
};

export default PointerButton;
