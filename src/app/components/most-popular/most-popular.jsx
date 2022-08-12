import { useSelector } from "react-redux";
import { MostPopularContainer, MostPopularPreview } from "./most-popular-style";
import MoviePoster from "../movie-poster/MoviePoster";
const MostPopular = () => {
	const topRatedPreview = useSelector(
		(state) => state.movies.popularMovies.movies
	).filter((movie, index) => index >= 3 && index < 7);
	return (
		<MostPopularContainer>
			<h5> Most Popular Movies</h5>
			<MostPopularPreview>
				{topRatedPreview.map((movie) => (
					<MoviePoster key={movie.id} movie={movie} titleStatus={true} />
				))}
			</MostPopularPreview>
		</MostPopularContainer>
	);
};
export default MostPopular;
