import {
	Box,
	createTheme,
	TextField,
	ThemeProvider,
	Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
const App = () => {
	const theme = createTheme({
		palette: {
			warning: {
				main: "#FFF500",
				light: "#FAFF00",
				dark: "#FFF500",
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{
					padding: "102px 130px",
					backgroundImage: "linear-gradient(#383838,#8A8A8A)",
				}}
			>
				<Typography color="info.contrastText" variant="h3">
					Movie<span style={{ color: "#FAFF00" }}>X</span>
				</Typography>
				<input type="search" className="search-field" />
			</Stack>
		</ThemeProvider>
	);
};

export default App;
