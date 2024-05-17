import {
	Box,
	Button,
	Card,
	CardActions,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	styled,
} from "@mui/material";
import Front from "./svgs/Front";
import Back from "./svgs/Back";
import Left from "./svgs/Left";
import Right from "./svgs/Right";
import { ReactNode, useState } from "react";
import theme from "../consts/theme";

enum PainLevels {
	none = 0,
	mild = 1,
	moderate = 2,
	severe = 3,
}

enum BodyParts {
	fullBody,
	head,
	teeth,
	eye,
	feet,
	hands,
}

type FormData = {
	painLevel: PainLevels;
	bodyPart: BodyParts;
};

const ContentWrapper = () => {
	const [currentPerspective, setCurrentPerspective] = useState(0);
	const [formData, setFormData] = useState<FormData>({ painLevel: PainLevels.none, bodyPart: BodyParts.fullBody });
	const [selectIsOpen, setSelectIsOpen] = useState({ painLevel: false, bodyPart: false });

	const perspectives = [
		{ name: "Front", svg: <Front /> },
		{ name: "Right", svg: <Right /> },
		{ name: "Back", svg: <Back /> },
		{ name: "Left", svg: <Left /> },
	];

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

	return (
		<Container fixed sx={{ marginTop: (theme) => theme.spacing(3) }}>
			<Box display="flex" gap={2}>
				<StyledCard>
					{perspectives[currentPerspective].svg}
					<CardActions>
						{perspectives.map((perspective, index) => (
							<Button
								key={index}
								onClick={() => setCurrentPerspective(index)}
								variant="contained"
								color={currentPerspective === index ? "secondary" : "primary"}
							>
								{perspective.name}
							</Button>
						))}
					</CardActions>
				</StyledCard>
				<StyledCard>
					<FormControl fullWidth margin="normal">
						<InputLabel id="body-part-label">Body Part</InputLabel>
						<Select
							labelId="body-part-label"
							id="body-part-select"
							value={formData.bodyPart.toString()}
							name="bodyPart"
							label="Body Part"
							onChange={handleFormChange}
							open={selectIsOpen.bodyPart}
							onOpen={() => handleSelectOpen("bodyPart")}
							onClose={() => handleSelectClose("bodyPart")}
						>
							<MenuItem value={BodyParts.fullBody}>Full Body</MenuItem>
							<MenuItem value={BodyParts.head}>Head</MenuItem>
							<MenuItem value={BodyParts.teeth}>Teeth</MenuItem>
							<MenuItem value={BodyParts.eye}>Eye</MenuItem>
							<MenuItem value={BodyParts.feet}>Feet</MenuItem>
							<MenuItem value={BodyParts.hands}>Hands</MenuItem>
						</Select>
						<Button
							variant="contained"
							color="primary"
							sx={{ marginTop: (theme) => theme.spacing(2) }}
							onClick={() => handleSelectOpen("bodyPart")}
						>
							Open Body Part Select
						</Button>
					</FormControl>
					<FormControl fullWidth margin="normal">
						<InputLabel id="pain-level-label">Pain Level</InputLabel>
						<Select
							labelId="pain-level-label"
							id="pain-level-select"
							value={formData.painLevel.toString()}
							name="painLevel"
							label="Pain Level"
							onChange={handleFormChange}
							open={selectIsOpen.painLevel}
							onOpen={() => handleSelectOpen("painLevel")}
							onClose={() => handleSelectClose("painLevel")}
						>
							<MenuItem value={PainLevels.none}>Itch</MenuItem>
							<MenuItem value={PainLevels.mild}>Mild Pain</MenuItem>
							<MenuItem value={PainLevels.moderate}>Moderate Pain</MenuItem>
							<MenuItem value={PainLevels.severe}>Severe Pain</MenuItem>
						</Select>
						<Button
							variant="contained"
							color="primary"
							sx={{ marginTop: (theme) => theme.spacing(2) }}
							onClick={() => handleSelectOpen("painLevel")}
						>
							Open Pain Level Select
						</Button>
					</FormControl>
				</StyledCard>
			</Box>
		</Container>
	);
};

export default ContentWrapper;

const StyledCard = styled(Card)`
	padding: ${({ theme }) => theme.spacing(3)};
	width: 100%;
	height: 100%;
`;
