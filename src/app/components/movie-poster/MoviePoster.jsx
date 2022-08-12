import { useDispatch } from "react-redux/";
import { useNavigate } from "react-router-dom";
import { setCurrentMovie } from "../../features/moviesReducer";
const MoviePoster = ({ movie, titleStatus }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				dispatch(setCurrentMovie(movie));
				navigate(movie.id.toString());
			}}
		>
			<img
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={movie.title}
			/>
			{titleStatus && <p>{movie.title}</p>}
		</div>
	);
};
export default MoviePoster;
