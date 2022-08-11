import PopularMoviesList from "../PopularMoviesList/PopularMoviesList";
import { PreviewContainer } from "./movies-preview-style";
const MoviesPreview = () => {
	return (
		<PreviewContainer>
			<PopularMoviesList />
		</PreviewContainer>
	);
};
export default MoviesPreview;
