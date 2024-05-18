import { Button, ButtonProps, LinearProgress } from "@mui/material";
import { useRef, useState } from "react";

type PointerButtonProps = {
	pointerInputIsEnabled: boolean;
	onClick: () => void;
} & ButtonProps;

const DWELLING_TIME_LIMIT = 1500;
const REFRESH_RATE = 500;
const DWELLING_DELAY = 500;
const ACTION_DELAY = 500;
const dwellingTimeToProgress = (dwellingTime: number) => ((dwellingTime - DWELLING_DELAY) / DWELLING_TIME_LIMIT) * 100;

const PointerButton = ({ pointerInputIsEnabled, onClick, ...props }: PointerButtonProps) => {
	const [dwellingTime, setDwellingTime] = useState(0);
	const [isDwelling, setIsDwelling] = useState(false);
	const dwellingDelayPassed = dwellingTime >= DWELLING_DELAY;

	const timer = useRef<NodeJS.Timeout | null>(null);
	const actionTimeout = useRef<NodeJS.Timeout | null>(null);

	const handlePointerEntry = () => {
		setDwellingTime(0);
		if (timer.current) {
			clearInterval(timer.current);
		}
		if (pointerInputIsEnabled) {
			timer.current = setInterval(() => {
				setDwellingTime((prev) => {
					const next = prev + REFRESH_RATE;
					return Math.min(next, DWELLING_TIME_LIMIT + DWELLING_DELAY);
				});
			}, REFRESH_RATE);
			setIsDwelling(true);
			actionTimeout.current = setTimeout(() => {
				onClick();
				setIsDwelling(false);
			}, DWELLING_TIME_LIMIT + DWELLING_DELAY + ACTION_DELAY);
		}
	};

	const handlePointerLeave = () => {
		if (pointerInputIsEnabled) {
			if (timer.current) {
				clearInterval(timer.current);
			}
			if (actionTimeout.current) {
				clearTimeout(actionTimeout.current);
			}
			setDwellingTime(0);
			setIsDwelling(false);
		}
	};

	return (
		<Button onClick={onClick} onMouseEnter={handlePointerEntry} onMouseLeave={handlePointerLeave} {...props}>
			{isDwelling && dwellingDelayPassed && (
				<LinearProgress
					variant="determinate"
					value={dwellingTimeToProgress(dwellingTime)}
					color="secondary"
					sx={{ width: "100%" }}
				/>
			)}
			{(!isDwelling || !dwellingDelayPassed) && props.children}
		</Button>
	);
};

export default PointerButton;
