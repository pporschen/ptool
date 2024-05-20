import { useState, useRef, useEffect } from "react";
import { DWELLING_DELAY, DWELLING_TIME_LIMIT, REFRESH_RATE, ACTION_DELAY } from "../config/consts";

const dwellingTimeToProgress = (dwellingTime: number) => ((dwellingTime - DWELLING_DELAY) / DWELLING_TIME_LIMIT) * 100;
type PointerControlProps = {
	action: () => void;
	pointerInputIsEnabled: boolean;
};

const usePointerControl = ({ action, pointerInputIsEnabled }: PointerControlProps) => {
	const [dwellingTime, setDwellingTime] = useState(0);
	const [isDwelling, setIsDwelling] = useState(false);
	const dwellingDelayPassed = dwellingTime >= DWELLING_DELAY;

	const timer = useRef<NodeJS.Timeout | null>(null);
	const actionTimeout = useRef<NodeJS.Timeout | null>(null);

	const dwellingProgress = dwellingTimeToProgress(dwellingTime);

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
				action();
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

	useEffect(() => {
		return () => {
			if (timer.current) {
				clearInterval(timer.current);
			}
			if (actionTimeout.current) {
				clearTimeout(actionTimeout.current);
			}
		};
	}, []);

	return { handlePointerEntry, handlePointerLeave, dwellingProgress, isDwelling, dwellingDelayPassed, dwellingTime };
};

export default usePointerControl;
