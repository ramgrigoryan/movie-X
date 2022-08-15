import { useDispatch } from "react-redux/";
import { Link } from "react-router-dom";
import { setCurrentMovie } from "../../features/moviesReducer";
import { restoreCurrentMovieStatus } from "../../features/moviesReducer";
import { PosterContainer } from "./movie-poster-style";
const MoviePoster = ({ movie, titleStatus }) => {
	const dispatch = useDispatch();
	return (
		<PosterContainer>
			<Link
				onClick={() => {
					dispatch(setCurrentMovie(movie));
					dispatch(restoreCurrentMovieStatus());
				}}
				to={`/movie/${movie.id.toString()}`}
			>
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
				/>
			</Link>
			{titleStatus && <p>{movie.title}</p>}
		</PosterContainer>
	);
};
export default MoviePoster;
