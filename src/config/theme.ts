import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#3E5E84",
		},
		secondary: {
			main: "#c24c71",
		},
		error: {
			main: "#ff3333",
		},
		background: {
			default: "#FDF8E8",
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
					minHeight: "4rem",
					minWidth: "6rem",
					boxShadow: "none",
					"&:hover": {
						boxShadow: "none",
					},
				},
			},
		},
		MuiCardActions: {
			styleOverrides: {
				root: {
					justifyContent: "center",
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					minHeight: "4rem",
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					minHeight: "4rem !important",
					justifyContent: "space-between",
				},
			},
		},
	},
});

export default theme;
