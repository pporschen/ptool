import { Box, LinearProgress, Menu, MenuItem, MenuItemProps } from "@mui/material";
import usePointerControl from "../../hooks/usePointerControl";

type PointerMenuItemProps = {
	action: () => void;
	pointerInputIsEnabled: boolean;
} & MenuItemProps;

const PointerMenuItem = ({ action, pointerInputIsEnabled, ...props }: PointerMenuItemProps) => {
	const { handlePointerEntry, handlePointerLeave, dwellingProgress, isDwelling, dwellingDelayPassed } =
		usePointerControl({ action, pointerInputIsEnabled });

	return (
		<MenuItem {...props} onMouseEnter={handlePointerEntry} onMouseLeave={handlePointerLeave}>
			<Box>{props.children}</Box>
			<Box width="30%">
				{isDwelling && dwellingDelayPassed && (
					<LinearProgress variant="determinate" value={dwellingProgress} color="secondary" sx={{ width: "100%" }} />
				)}
			</Box>
		</MenuItem>
	);
};

export default PointerMenuItem;
