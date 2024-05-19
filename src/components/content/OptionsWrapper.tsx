import { FormControl, InputLabel, Select, Divider, SelectChangeEvent } from "@mui/material";
import { t } from "i18next";
import PointerButton from "../PointerControlled/PointerButton";
import PointerMenuItem from "../PointerControlled/PointerMenuItem";
import { StyledCard } from "./ContentWrapper";
import { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { usePointerInputStatusStore } from "../../stores/PointerInputStatusStore";
import { BodyParts, FormData, PainLevels } from "./types";

type OptionsWrapperProps = {
	pointerInputIsEnabled: boolean;
	pointerCaptureIsEnabled: boolean;
	setPointerCaptureIsEnabled: Dispatch<SetStateAction<boolean>>;
	setDots: Dispatch<SetStateAction<Record<string, { x: number; y: number }>>>;
	formData: FormData;
	setFormData: Dispatch<SetStateAction<FormData>>;
};

const OptionsWrapper = ({
	pointerInputIsEnabled,
	setPointerCaptureIsEnabled,
	pointerCaptureIsEnabled,
	setDots,
	formData,
	setFormData,
}: OptionsWrapperProps) => {
	const [selectIsOpen, setSelectIsOpen] = useState({ painLevel: false, bodyPart: false });
	const setPointerInputIsEnabled = usePointerInputStatusStore((state) => state.setPointerInputIsEnabled);
	const handlePointerInputToggle = () => {
		setPointerInputIsEnabled(!pointerInputIsEnabled);
	};

	const handleFormChange = (e: SelectChangeEvent<unknown>, _: ReactNode) => {
		const { name, value } = e.target;
		console.log(e.target);
		setFormData({ ...formData, [name]: value });
	};

	const handleSelectOpen = (name: string) => {
		setSelectIsOpen({ ...selectIsOpen, [name]: true });
		Object.keys(selectIsOpen).forEach((key) => {
			if (key !== name) {
				setSelectIsOpen((prevState) => ({ ...prevState, [key]: false }));
			}
		});
	};

	const handleSelectClose = (name: string) => {
		setSelectIsOpen({ ...selectIsOpen, [name]: false });
	};

	const handleMenuItemAction = (name: string, value: PainLevels | BodyParts) => {
		setFormData({ ...formData, [name]: value });
		handleSelectClose(name);
	};

	const handlePointerCaptureToggle = () => {
		setPointerCaptureIsEnabled(!pointerCaptureIsEnabled);
	};

	const handleResetDots = () => {
		setDots({});
	};

	return (
		<StyledCard sx={{ minWidth: "400px", width: "40%", minHeight: "800px" }}>
			<PointerButton
				pointerInputIsEnabled={pointerInputIsEnabled}
				variant="contained"
				color="primary"
				sx={{ marginButtom: (theme) => theme.spacing(3) }}
				onClick={() => handleSelectOpen("bodyPart")}
			>
				{t("Open Body Part Select")}
			</PointerButton>
			<FormControl fullWidth margin="normal">
				<InputLabel id="body-part-label">{t("Body Part")}</InputLabel>
				<Select
					labelId="body-part-label"
					id="body-part-select"
					value={formData.bodyPart.toString()}
					name="bodyPart"
					label={t("Body Part")}
					onChange={handleFormChange}
					open={selectIsOpen.bodyPart}
					onOpen={() => handleSelectOpen("bodyPart")}
					onClose={() => handleSelectClose("bodyPart")}
				>
					{Object.values(BodyParts).map((value) => {
						return (
							<PointerMenuItem
								action={() => handleMenuItemAction("bodyPart", value)}
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
			<PointerButton
				pointerInputIsEnabled={pointerInputIsEnabled}
				variant="contained"
				color="primary"
				sx={{ marginTop: (theme) => theme.spacing(2) }}
				onClick={() => handleSelectOpen("painLevel")}
			>
				{t("Open Pain Level Select")}
			</PointerButton>
			<FormControl fullWidth margin="normal">
				<InputLabel id="pain-level-label">{t("Pain Level")}</InputLabel>
				<Select
					labelId="pain-level-label"
					id="pain-level-select"
					value={formData.painLevel.toString()}
					name="painLevel"
					label={t("Pain Level")}
					onChange={handleFormChange}
					open={selectIsOpen.painLevel}
					onOpen={() => handleSelectOpen("painLevel")}
					onClose={() => handleSelectClose("painLevel")}
				>
					<PointerMenuItem
						action={() => handleMenuItemAction("painLevel", PainLevels.none)}
						pointerInputIsEnabled={pointerInputIsEnabled}
						value={PainLevels.none}
					>
						{t("Itch")}
					</PointerMenuItem>
					<PointerMenuItem
						action={() => handleMenuItemAction("painLevel", PainLevels.mild)}
						pointerInputIsEnabled={pointerInputIsEnabled}
						value={PainLevels.mild}
					>
						{t("Mild Pain")}
					</PointerMenuItem>
					<PointerMenuItem
						action={() => handleMenuItemAction("painLevel", PainLevels.moderate)}
						pointerInputIsEnabled={pointerInputIsEnabled}
						value={PainLevels.moderate}
					>
						{t("Moderate Pain")}
					</PointerMenuItem>
					<PointerMenuItem
						action={() => handleMenuItemAction("painLevel", PainLevels.severe)}
						pointerInputIsEnabled={pointerInputIsEnabled}
						value={PainLevels.severe}
					>
						{t("Severe Pain")}
					</PointerMenuItem>
				</Select>
			</FormControl>
			<Divider sx={{ flexGrow: 1 }} />
			<PointerButton
				pointerInputIsEnabled={pointerInputIsEnabled}
				variant="contained"
				color="primary"
				sx={{ marginTop: (theme) => theme.spacing(2) }}
				fullWidth
				onClick={handleResetDots}
			>
				{t("Reset Points")}
			</PointerButton>

			<PointerButton
				pointerInputIsEnabled={pointerInputIsEnabled}
				variant="contained"
				color="primary"
				sx={{ marginTop: (theme) => theme.spacing(1) }}
				fullWidth
				onClick={handlePointerCaptureToggle}
			>
				{pointerCaptureIsEnabled ? t("Stop Pointer Capture") : t("Start Pointer Capture")}
			</PointerButton>

			<PointerButton
				pointerInputIsEnabled
				variant="contained"
				color="secondary"
				onClick={handlePointerInputToggle}
				fullWidth
				sx={{ marginTop: (theme) => theme.spacing(1) }}
			>
				{pointerInputIsEnabled ? t("Disable Pointer Input") : t("Enable Pointer Input")}
			</PointerButton>
		</StyledCard>
	);
};

export default OptionsWrapper;
