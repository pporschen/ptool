import { FormControl, InputLabel, Select, Divider, SelectChangeEvent } from "@mui/material";
import { t } from "i18next";
import PointerButton from "../PointerControlled/PointerButton";
import PointerMenuItem from "../PointerControlled/PointerMenuItem";
import { StyledCard } from "./ContentWrapper";
import { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { usePointerInputStatusStore } from "../../stores/PointerInputStatusStore";
import { BodyParts, FormData, PainLevels } from "./types";
import PointerSelect from "../PointerControlled/PointerSelect";

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
	const handleFormChange = (e: SelectChangeEvent<unknown>, _: ReactNode) => {
		const { name, value } = e.target;
		console.log(e.target);
		setFormData({ ...formData, [name]: value });
	};

	const handleMenuItemAction = (name: string, value: string) => {
		console.log(name, value);
		setFormData({ ...formData, [name]: value });
	};

	const handlePointerCaptureToggle = () => {
		setPointerCaptureIsEnabled(!pointerCaptureIsEnabled);
	};

	const handleResetDots = () => {
		setDots({});
	};

	return (
		<StyledCard sx={{ width: "40vw" }}>
			<PointerSelect
				buttonText="Open Body Part Select"
				pointerInputIsEnabled={pointerInputIsEnabled}
				label="Body Part"
				name="bodyPart"
				value={formData.bodyPart.toString()}
				onChange={handleFormChange}
				itemAction={(value: string) => handleMenuItemAction("bodyPart", value)}
				items={BodyParts}
				wrapperSX={{ marginBottom: (theme) => theme.spacing(2) }}
			/>
			<PointerSelect
				buttonText="Open Pain Level Select"
				pointerInputIsEnabled={pointerInputIsEnabled}
				label="Pain Level"
				name="painLevel"
				value={formData.painLevel.toString()}
				onChange={handleFormChange}
				itemAction={(value: string) => handleMenuItemAction("painLevel", value)}
				items={PainLevels}
			/>
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
		</StyledCard>
	);
};

export default OptionsWrapper;
