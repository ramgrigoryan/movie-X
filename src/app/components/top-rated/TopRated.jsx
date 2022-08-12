import { useSelector } from "react-redux";
import { TopRatedContainer, TopRatedPreview } from "./top-rated-style";
import MoviePoster from "../movie-poster/MoviePoster";
const TopRated = () => {
	const topRatedPreview = useSelector(
		(state) => state.movies.topRatedMovies.movies
	).filter((movie, index) => index < 4);
	return (
		<TopRatedContainer>
			<h5>Most rated films</h5>
			<TopRatedPreview>
				{topRatedPreview.map((movie) => (
					<MoviePoster key={movie.id} movie={movie} titleStatus={true} />
				))}
			</TopRatedPreview>
		</TopRatedContainer>
	);
};
export default TopRated;
