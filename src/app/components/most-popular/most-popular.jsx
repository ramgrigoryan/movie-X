import { useSelector } from "react-redux";
import { MostPopularContainer, MostPopularPreview } from "./most-popular-style";
const MostPopular = () => {
	const topRatedPreview = useSelector(
		(state) => state.movies.popularMovies.movies
	).filter((movie, index) => index >= 3 && index < 7);
	return (
		<MostPopularContainer>
			<h5> Most Popular Movies</h5>
			<MostPopularPreview>
				{topRatedPreview.map((movie) => (
					<div key={movie.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={movie.original_title}
						/>
						<p>{movie.original_title}</p>
					</div>
				))}
			</MostPopularPreview>
		</MostPopularContainer>
	);
};
export default MostPopular;
