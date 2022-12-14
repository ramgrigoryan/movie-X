import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	fetchCurrentMovieDetails,
	fetchTrailers,
	fetchSimilarMovies,
} from "../../features/moviesReducer";
import Footer from "../Footer/Footer";
import {
	CurrentMovieContainer,
	MovieInfoContainer,
	MovieSpecificationContainer,
	MovieDescriptionContainer,
	InfoLines,
	CastContainer,
	MovieTrailersContainer,
	MovieContainers,
	SimilarMoviesContainer,
	SimilarPostersContainer,
} from "./current-movie-style";
import Header from "../header/Header";
import MoviePoster from "../movie-poster/MoviePoster";
const CurrentMovie = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { currentMovieId } = params;
	const { status, movie, credits, trailers, similars } = useSelector(
		(state) => state.movies.currentMovie
	);
	useEffect(() => {
		console.log("useEffect");
		if (status === "idle") {
			console.log(currentMovieId);
			dispatch(fetchCurrentMovieDetails(currentMovieId));
			dispatch(fetchTrailers(currentMovieId));
			dispatch(fetchSimilarMovies(currentMovieId));
		}
	});
	if (!movie) {
		return <div>Loading...</div>;
	}
	return (
		<CurrentMovieContainer>
			<Header>
				<MovieInfoContainer>
					<MovieSpecificationContainer>
						<MoviePoster movie={movie} />
						<MovieDescriptionContainer>
							<h1>{movie.title}</h1>
							<InfoLines>
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M25 0C11.215 0 0 11.215 0 25C0 38.785 11.215 50 25 50C38.785 50 50 38.785 50 25C50 11.215 38.785 0 25 0ZM25 45C13.9725 45 5 36.0275 5 25C5 13.9725 13.9725 5 25 5C36.0275 5 45 13.9725 45 25C45 36.0275 36.0275 45 25 45Z"
										fill="#FAFF00"
									/>
									<path
										d="M27.5 12.5H22.5V26.035L30.7325 34.2675L34.2675 30.7325L27.5 23.965V12.5Z"
										fill="#FAFF00"
									/>
								</svg>
								<p>{movie.release_date}</p>
							</InfoLines>
							<InfoLines>
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M25 0C11.215 0 0 11.215 0 25C0 38.785 11.215 50 25 50C38.785 50 50 38.785 50 25C50 11.215 38.785 0 25 0ZM25 45C13.9725 45 5 36.0275 5 25C5 13.9725 13.9725 5 25 5C36.0275 5 45 13.9725 45 25C45 36.0275 36.0275 45 25 45Z"
										fill="#FAFF00"
									/>
									<path
										d="M25 13L27.6942 21.2918H36.4127L29.3593 26.4164L32.0534 34.7082L25 29.5836L17.9466 34.7082L20.6407 26.4164L13.5873 21.2918H22.3058L25 13Z"
										fill="#FAFF00"
									/>
								</svg>
								<p>{movie.vote_average.toFixed(1)}</p>
							</InfoLines>
							<InfoLines>
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M25 0C11.215 0 0 11.215 0 25C0 38.785 11.215 50 25 50C38.785 50 50 38.785 50 25C50 11.215 38.785 0 25 0ZM25 45C13.9725 45 5 36.0275 5 25C5 13.9725 13.9725 5 25 5C36.0275 5 45 13.9725 45 25C45 36.0275 36.0275 45 25 45Z"
										fill="#FAFF00"
									/>
									<path
										d="M32.5 23.5V25C32.9063 25 33.2578 25.1484 33.5547 25.4453C33.8516 25.7422 34 26.0977 34 26.5117C34 26.9258 33.8516 27.2773 33.5547 27.5664C33.2578 27.8555 32.9063 28 32.5 28H32.4531C32.3906 28.2656 32.2812 28.4766 32.125 28.6328L27.2969 31.7266L32.1484 34.8438C32.3984 35.0938 32.5234 35.3906 32.5234 35.7344C32.5234 36.0781 32.3984 36.375 32.1484 36.625C31.8984 36.875 31.5977 37 31.2461 37C30.8945 37 30.6016 36.875 30.3672 36.625L25 33.2031L19.6328 36.625C19.3828 36.875 19.0859 37 18.7422 37C18.3984 37 18.1016 36.875 17.8516 36.625C17.6016 36.375 17.4766 36.0781 17.4766 35.7344C17.4766 35.3906 17.6016 35.0938 17.8516 34.8438L22.7031 31.7266L17.875 28.6328C17.7188 28.4766 17.6094 28.2656 17.5469 28H17.5C17.0781 28 16.7227 27.8555 16.4336 27.5664C16.1445 27.2773 16 26.9258 16 26.5117C16 26.0977 16.1445 25.7422 16.4336 25.4453C16.7227 25.1484 17.0781 25 17.5 25V23.5C17.0781 23.5 16.7227 23.3555 16.4336 23.0664C16.1445 22.7773 16 22.4219 16 22V16C16 15.5937 16.1445 15.2422 16.4336 14.9453C16.7227 14.6484 17.0781 14.5 17.5 14.5C17.5 14.0937 17.6484 13.7422 17.9453 13.4453C18.2422 13.1484 18.5977 13 19.0117 13C19.4258 13 19.7773 13.1484 20.0664 13.4453C20.3555 13.7422 20.5 14.0937 20.5 14.5H29.5C29.5 14.0937 29.6484 13.7422 29.9453 13.4453C30.2422 13.1484 30.5977 13 31.0117 13C31.4258 13 31.7773 13.1484 32.0664 13.4453C32.3555 13.7422 32.5 14.0937 32.5 14.5C32.9219 14.5 33.2773 14.6484 33.5664 14.9453C33.8555 15.2422 34 15.5937 34 16V22C34 22.4219 33.8516 22.7773 33.5547 23.0664C33.2578 23.3555 32.9063 23.5 32.5 23.5ZM25 30.2734L28.5391 28H21.4375L25 30.2734ZM20.5 23.5V25H29.5V23.5H20.5Z"
										fill="#FAFF00"
									/>
								</svg>

								{credits && (
									<p>
										{credits.crew.find((crew) => crew.job === "Director").name}
									</p>
								)}
							</InfoLines>
							<CastContainer>
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.125 25C3.125 30.8016 5.42968 36.3656 9.53204 40.468C13.6344 44.5703 19.1984 46.875 25 46.875C30.8016 46.875 36.3656 44.5703 40.468 40.468C44.5703 36.3656 46.875 30.8016 46.875 25C46.875 19.1984 44.5703 13.6344 40.468 9.53204C36.3656 5.42968 30.8016 3.125 25 3.125C19.1984 3.125 13.6344 5.42968 9.53204 9.53204C5.42968 13.6344 3.125 19.1984 3.125 25ZM50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25ZM35.9375 23.4375C36.3519 23.4375 36.7493 23.6021 37.0424 23.8951C37.3354 24.1882 37.5 24.5856 37.5 25C37.5 25.4144 37.3354 25.8118 37.0424 26.1049C36.7493 26.3979 36.3519 26.5625 35.9375 26.5625H17.8344L24.5438 33.2687C24.689 33.414 24.8043 33.5865 24.8829 33.7763C24.9615 33.9661 25.002 34.1696 25.002 34.375C25.002 34.5804 24.9615 34.7839 24.8829 34.9737C24.8043 35.1635 24.689 35.336 24.5438 35.4813C24.3985 35.6265 24.226 35.7418 24.0362 35.8204C23.8464 35.899 23.6429 35.9395 23.4375 35.9395C23.2321 35.9395 23.0286 35.899 22.8388 35.8204C22.649 35.7418 22.4765 35.6265 22.3312 35.4813L12.9562 26.1063C12.8107 25.9611 12.6953 25.7887 12.6165 25.5989C12.5378 25.409 12.4972 25.2055 12.4972 25C12.4972 24.7945 12.5378 24.591 12.6165 24.4011C12.6953 24.2113 12.8107 24.0389 12.9562 23.8937L22.3312 14.5187C22.6246 14.2254 23.0226 14.0605 23.4375 14.0605C23.8524 14.0605 24.2504 14.2254 24.5438 14.5187C24.8371 14.8121 25.002 15.2101 25.002 15.625C25.002 16.0399 24.8371 16.4379 24.5438 16.7313L17.8344 23.4375H35.9375Z"
										fill="#FAFF00"
									/>
								</svg>
								{credits &&
									credits.cast
										.filter((actor) => {
											if (actor.profile_path) {
												return actor;
											}
										})
										.filter((actor, index) => index < 7)
										.map(
											(actor) =>
												actor.profile_path && (
													<img
														key={actor.name}
														src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`}
													/>
												)
										)}
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M46.875 25C46.875 19.1984 44.5703 13.6344 40.468 9.53204C36.3656 5.42968 30.8016 3.125 25 3.125C19.1984 3.125 13.6344 5.42968 9.53204 9.53204C5.42968 13.6344 3.125 19.1984 3.125 25C3.125 30.8016 5.42968 36.3656 9.53204 40.468C13.6344 44.5703 19.1984 46.875 25 46.875C30.8016 46.875 36.3656 44.5703 40.468 40.468C44.5703 36.3656 46.875 30.8016 46.875 25ZM0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25ZM14.0625 26.5625C13.6481 26.5625 13.2507 26.3979 12.9576 26.1049C12.6646 25.8118 12.5 25.4144 12.5 25C12.5 24.5856 12.6646 24.1882 12.9576 23.8951C13.2507 23.6021 13.6481 23.4375 14.0625 23.4375H32.1656L25.4562 16.7313C25.311 16.586 25.1957 16.4135 25.1171 16.2237C25.0385 16.0339 24.998 15.8304 24.998 15.625C24.998 15.4196 25.0385 15.2161 25.1171 15.0263C25.1957 14.8365 25.311 14.664 25.4562 14.5187C25.6015 14.3735 25.774 14.2582 25.9638 14.1796C26.1536 14.101 26.3571 14.0605 26.5625 14.0605C26.7679 14.0605 26.9714 14.101 27.1612 14.1796C27.351 14.2582 27.5235 14.3735 27.6688 14.5187L37.0438 23.8937C37.1893 24.0389 37.3047 24.2113 37.3835 24.4011C37.4622 24.591 37.5028 24.7945 37.5028 25C37.5028 25.2055 37.4622 25.409 37.3835 25.5989C37.3047 25.7887 37.1893 25.9611 37.0438 26.1063L27.6688 35.4813C27.3754 35.7746 26.9774 35.9395 26.5625 35.9395C26.1476 35.9395 25.7496 35.7746 25.4562 35.4813C25.1629 35.1879 24.998 34.7899 24.998 34.375C24.998 33.9601 25.1629 33.5621 25.4562 33.2687L32.1656 26.5625H14.0625Z"
										fill="#FAFF00"
									/>
								</svg>
							</CastContainer>
						</MovieDescriptionContainer>
					</MovieSpecificationContainer>
					{trailers && (
						<MovieContainers>
							<h2>Trailers</h2>
							<MovieTrailersContainer>
								{trailers
									.filter((film, index) => index < 4)
									.map((video) => {
										return (
											<iframe
												key={video.key}
												width="400"
												height="280"
												src={`https://www.youtube.com/embed/${video.key}`}
												title={video.name}
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											></iframe>
										);
									})}
							</MovieTrailersContainer>
						</MovieContainers>
					)}
				</MovieInfoContainer>
			</Header>
			<SimilarMoviesContainer>
				<h2>Similar Movies</h2>
				<SimilarPostersContainer>
					{similars &&
						similars
							.filter((movie, index) => index < 4)
							.map((movie) => (
								<MoviePoster key={movie.id} movie={movie} titleStatus={true} />
							))}
				</SimilarPostersContainer>
			</SimilarMoviesContainer>
			<Footer />
		</CurrentMovieContainer>
	);
};
export default CurrentMovie;
