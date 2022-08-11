import { useSelector } from "react-redux";
import { FirstPreviewBanner, PreviewBanner } from "./popular-movies-list";

const PopularMoviesList = () => {
	const movies = useSelector((state) => state.movies.popularMovies.movies);
	const previewMovies = movies.filter((movie, index) => index < 3);
	return (
		<>
			{previewMovies.map((movie, index) =>
				index === 0 ? (
					<FirstPreviewBanner
						key={movie.id}
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						alt={movie.original_title}
					/>
				) : (
					<PreviewBanner
						key={movie.id}
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
						alt={movie.original_title}
					/>
				)
			)}
		</>
	);
};
export default PopularMoviesList;
