export const host = "https://api.themoviedb.org/3";

export const api_key = "2c60f4d9599d87ec8a653f7e485c8e3f";

export const get_Movies = (movieTitle) =>
	`${host}/search/movie?api_key=${api_key}&query=${movieTitle}`;

export const get_Details = (movieId) =>
	`${host}/movie/${movieId}?api_key=${api_key}`;

export const get_Images = (imagePath) =>
	`https://image.tmdb.org/t/p/w500/${imagePath}`;

export const get_Videos = (movieId) =>
	`${host}/movie/${movieId}/videos?/api_key=${api_key}&language=en-US`;

export const get_Credits = (movieId) =>
	`${host}/movie/${movieId}/credits?api_key=${api_key}&language=en-US`;

export const get_Popular_Movies = (page) =>
	`${host}/movie/popular?api_key=${api_key}&language=en-US&page=${page}`;

export const get_Top_Rated = (page) =>
	`${host}/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`;
export const get_Now_Playing = () =>
	`${host}movie/now_playing?api_key=${api_key}&language=en-US&page=1`;
export const get_Upcoming = () =>
	`${host}movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
