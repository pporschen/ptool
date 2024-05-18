import { Button, ButtonProps, LinearProgress } from "@mui/material";
import { set } from "lodash";
import { useRef, useState } from "react";

type GazeButtonProps = {
	gazeInputIsEnabled: boolean;
	onClick: () => void;
} & ButtonProps;

const DWELLING_TIME_LIMIT = 1500;
const REFRESH_RATE = 500;
const dwellingTimeToProgress = (dwellingTime: number) => (dwellingTime / DWELLING_TIME_LIMIT) * 100;

const GazeButton = ({ gazeInputIsEnabled, onClick, ...props }: GazeButtonProps) => {
	const [dwellingTime, setDwellingTime] = useState(0);
	const [isDwelling, setIsDwelling] = useState(false);

	const timer = useRef<NodeJS.Timeout | null>(null);
	const actionTimeout = useRef<NodeJS.Timeout | null>(null);

	const handleGazeEntry = () => {
		if (gazeInputIsEnabled) {
			timer.current = setInterval(() => {
				setDwellingTime((prev) => {
					const next = prev + REFRESH_RATE;
					return Math.min(next, DWELLING_TIME_LIMIT);
				});
			}, REFRESH_RATE);
			setIsDwelling(true);
			actionTimeout.current = setTimeout(() => {
				onClick();
			}, DWELLING_TIME_LIMIT + 500);
		}
	};

	const handleGazeLeave = () => {
		if (gazeInputIsEnabled) {
			if (timer.current) {
				clearTimeout(timer.current);
			}
			if (actionTimeout.current) {
				clearTimeout(actionTimeout.current);
			}
			setDwellingTime(0);
			setIsDwelling(false);
		}
	};

	return (
		<Button onClick={onClick} onMouseEnter={handleGazeEntry} onMouseLeave={handleGazeLeave} {...props}>
			{isDwelling && (
				<LinearProgress
					variant="determinate"
					value={dwellingTimeToProgress(dwellingTime)}
					color="secondary"
					sx={{ width: "100%" }}
				/>
			)}
			{!isDwelling && props.children}
		</Button>
	);
};

export default GazeButton;
