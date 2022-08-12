import { useSelector } from "react-redux";
import { FirstPreviewBanner, PreviewBanner } from "./popular-movies-list";
import MoviePoster from "../movie-poster/MoviePoster";
const PopularMoviesList = () => {
	const movies = useSelector((state) => state.movies.popularMovies.movies);
	const previewMovies = movies.filter((movie, index) => index < 3);
	return (
		<>
			{previewMovies.map((movie, index) =>
				index === 0 ? (
					<FirstPreviewBanner key={movie.id}>
						<MoviePoster movie={movie} />
					</FirstPreviewBanner>
				) : (
					<PreviewBanner key={movie.id}>
						<MoviePoster movie={movie} />
					</PreviewBanner>
				)
			)}
		</>
	);
};
export default PopularMoviesList;
