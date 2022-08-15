import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import MoviePoster from "../movie-poster/MoviePoster";
import { NotFound, SearchedMoviesContainer } from "./search-page-style";

const SearchPage = () => {
	const movieList = useSelector((state) => state.movies.searchedMovies.movies);
	console.log(movieList);
	return (
		<div>
			<Header />
			{(!movieList || movieList.length === 0) && (
				<NotFound>
					<svg
						width="45"
						height="45"
						viewBox="0 0 45 45"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.5 13.125C23.5312 13.125 24.375 13.9688 24.375 15V22.5C24.375 23.5312 23.5312 24.375 22.5 24.375C21.4688 24.375 20.625 23.5312 20.625 22.5V15C20.625 13.9688 21.4688 13.125 22.5 13.125ZM22.4812 3.75C12.1312 3.75 3.75 12.15 3.75 22.5C3.75 32.85 12.1312 41.25 22.4812 41.25C32.85 41.25 41.25 32.85 41.25 22.5C41.25 12.15 32.85 3.75 22.4812 3.75ZM22.5 37.5C14.2125 37.5 7.5 30.7875 7.5 22.5C7.5 14.2125 14.2125 7.5 22.5 7.5C30.7875 7.5 37.5 14.2125 37.5 22.5C37.5 30.7875 30.7875 37.5 22.5 37.5ZM24.375 31.875H20.625V28.125H24.375V31.875Z"
							fill="#FAFF00"
						/>
					</svg>
					<p> The film does not found</p>
				</NotFound>
			)}
			<SearchedMoviesContainer>
				{movieList.map((movie) => (
					<MoviePoster key={movie.id} movie={movie} titleStatus={true} />
				))}
			</SearchedMoviesContainer>
			<Footer />
		</div>
	);
};
export default SearchPage;
