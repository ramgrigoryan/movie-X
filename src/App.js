import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./app/components/header/Header";
import TopRated from "./app/components/top-rated/TopRated";
import MostPopular from "./app/components/most-popular/most-popular";
import {
	fetchPopularMovies,
	fetchTopRatedMovies,
} from "./app/features/moviesReducer";
import Footer from "./app/components/Footer/Footer";
const App = () => {
	const popularStatus = useSelector(
		(state) => state.movies.popularMovies.status
	);
	const topRatedStatus = useSelector(
		(state) => state.movies.topRatedMovies.status
	);
	const dispatch = useDispatch();
	useEffect(() => {
		const getPopularMovies = async () => {
			if (popularStatus === "idle") {
				dispatch(fetchPopularMovies(1));
			}
		};
		const getTopRatedMovies = async () => {
			if (popularStatus === "idle") {
				dispatch(fetchTopRatedMovies(2));
			}
		};
		getPopularMovies();
		getTopRatedMovies();
	});

	return (
		<div>
			<Header />
			<MostPopular />
			<TopRated />
			<Footer />
		</div>
	);
};

export default App;
