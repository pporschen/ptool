import { Box, Button, Card, CardActions, Container, styled } from "@mui/material";
import Front from "./svgs/Front";
import Back from "./svgs/Back";
import Left from "./svgs/Left";
import Right from "./svgs/Right";
import { useState } from "react";

const ContentWrapper = () => {
	const [currentPerspective, setCurrentPerspective] = useState(0);
	const perspectives = [
		{ name: "Front", svg: <Front /> },
		{ name: "Right", svg: <Right /> },
		{ name: "Back", svg: <Back /> },
		{ name: "Left", svg: <Left /> },
	];
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
					<p>Content goes here...</p>
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
