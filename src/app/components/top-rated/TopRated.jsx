import { useSelector } from "react-redux";
import { TopRatedContainer, TopRatedPreview } from "./top-rated-style";
const TopRated = () => {
	const topRatedPreview = useSelector(
		(state) => state.movies.topRatedMovies.movies
	).filter((movie, index) => index < 4);
	return (
		<TopRatedContainer>
			<h5>Most rated films</h5>
			<TopRatedPreview>
				{topRatedPreview.map((movie) => (
					<div key={movie.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={movie.original_title}
						/>
						<p>{movie.original_title}</p>
					</div>
				))}
			</TopRatedPreview>
		</TopRatedContainer>
	);
};
export default TopRated;
