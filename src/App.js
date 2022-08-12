import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./app/components/header/Header";
import TopRated from "./app/components/top-rated/TopRated";
import MostPopular from "./app/components/most-popular/most-popular";
import {
	fetchPopularMovies,
	fetchTopRatedMovies,
	restoreCurrentMovieStatus,
} from "./app/features/moviesReducer";
import Footer from "./app/components/Footer/Footer";
import MoviesPreview from "./app/components/movies-preview/MoviesPreview";
import { PreviewText } from "./app-style";
const App = () => {
	const currentMovie = useSelector((state) => state.movies.currentMovie);
	const popularStatus = useSelector(
		(state) => state.movies.popularMovies.status
	);
	const topRatedStatus = useSelector(
		(state) => state.movies.topRatedMovies.status
	);
	const dispatch = useDispatch();
	useEffect(() => {
		currentMovie && dispatch(restoreCurrentMovieStatus());
		const getPopularMovies = async () => {
			if (popularStatus === "idle") {
				dispatch(fetchPopularMovies(1));
			}
		};
		const getTopRatedMovies = async () => {
			if (topRatedStatus === "idle") {
				dispatch(fetchTopRatedMovies(2));
			}
		};
		getPopularMovies();
		getTopRatedMovies();
	});

	return (
		<div>
			<Header>
				<MoviesPreview />
				<PreviewText>
					<h5>Watch everywhere.</h5>
					<p>
						Stream unlimited movies and TV shows on your phone, tablet, laptop,
						and TV without paying more.
					</p>
				</PreviewText>
			</Header>
			<MostPopular />
			<TopRated />
			<Footer />
		</div>
	);
};

export default App;
