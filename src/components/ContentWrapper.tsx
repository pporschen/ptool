import { Box, Card, Container, styled } from "@mui/material";

const ContentWrapper = () => {
	return (
		<Container fixed sx={{ marginTop: (theme) => theme.spacing(3) }}>
			<Box display="flex" gap={2}>
				<StyledCard>
					<p>Content goes here...</p>
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
`;
