import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "./app/features/moviesReducer";
const App = () => {
	const status = useSelector((state) => state.movies.status);
	const dispatch = useDispatch();
	useEffect(() => {
		const getPopularMovies = async () => {
			if (status === "idle") {
				dispatch(fetchPopularMovies());
			}
		};
		getPopularMovies();
	});

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
			<Box>
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
			</Box>
		</ThemeProvider>
	);
};

export default App;
