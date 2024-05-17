import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2aaec5",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: "#ff3333",
		},
		background: {
			default: "#ebe9e9",
		},
		common: {
			black: "#000",
			white: "#fff",
		},
	},
	typography: {
		fontFamily: ["Noto Sans", "sans-serif"].join(","),
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: "#fff",
					fontWeight: "bold",
					minHeight: "3rem",
					minWidth: "6rem",
				},
			},
		},
	},
});

export default theme;
