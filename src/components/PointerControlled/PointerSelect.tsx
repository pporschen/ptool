import { Box, FormControl, InputLabel, Select, SelectChangeEvent, SxProps, Theme } from "@mui/material";
import PointerButton from "./PointerButton";
import PointerMenuItem from "./PointerMenuItem";
import { ReactNode, useState } from "react";
import { t } from "i18next";
import { kebabCase } from "lodash";

type PointerSelectProps = {
	buttonText: string;
	pointerInputIsEnabled: boolean;
	label: string;
	value: string;
	onChange: (event: SelectChangeEvent<string>, child?: ReactNode) => void;
	itemAction: (value: string) => void;
	items: Record<string, string>;
	name: string;
	wrapperSX?: SxProps<Theme> | undefined;
	fullWidth?: boolean;
};

const PointerSelect = ({
	buttonText,
	pointerInputIsEnabled,
	label,
	value,
	onChange,
	itemAction,
	items,
	name,
	wrapperSX,
	fullWidth = true,
}: PointerSelectProps) => {
	const [selectIsOpen, setSelectIsOpen] = useState(false);
	const kebabLabel = kebabCase(label);

	const actionHandler = (value: string) => {
		itemAction(value);
		setSelectIsOpen(false);
	};

	return (
		<Box sx={wrapperSX}>
			<PointerButton
				fullWidth={fullWidth}
				pointerInputIsEnabled={pointerInputIsEnabled}
				variant="contained"
				color="primary"
				onClick={() => setSelectIsOpen(true)}
			>
				{t(buttonText)}
			</PointerButton>
			<FormControl fullWidth={fullWidth} margin="normal">
				<InputLabel id={`${kebabLabel}-label`}>{t(label)}</InputLabel>
				<Select
					labelId={`${kebabLabel}-label`}
					id={`${kebabLabel}-select`}
					value={value}
					name={name}
					label={t(label)}
					onChange={onChange}
					open={selectIsOpen}
					onOpen={() => setSelectIsOpen(true)}
					onClose={() => setSelectIsOpen(false)}
				>
					{Object.values(items).map((value) => {
						return (
							<PointerMenuItem
								action={() => actionHandler(value)}
								pointerInputIsEnabled={pointerInputIsEnabled}
								value={value}
								key={value}
							>
								{t(value)}
							</PointerMenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
};

export default PointerSelect;
