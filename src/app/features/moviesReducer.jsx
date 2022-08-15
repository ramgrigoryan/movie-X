import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
	host,
	api_key,
	get_Movies,
	get_Details,
	get_Videos,
	get_Credits,
	get_Popular_Movies,
	get_Top_Rated,
	get_Similar_Movies,
} from "../GET_APIS/api";

export const fetchSearchedMovies = createAsyncThunk(
	"movies/fetchSearchedMovies",
	async (movieTitle) => {
		const response = await (await fetch(get_Movies(movieTitle))).json();
		return response.results;
	}
);

export const fetchPopularMovies = createAsyncThunk(
	"movies/fetchPopularMovies",
	async () => {
		const response = await (
			await fetch(get_Popular_Movies(Math.round(100 * Math.random())))
		).json();
		return response;
	}
);
export const fetchTopRatedMovies = createAsyncThunk(
	"movies/fetchTopRatedMovies",
	async () => {
		const response = await (
			await fetch(get_Top_Rated(Math.round(100 * Math.random())))
		).json();
		return response;
	}
);

export const fetchSimilarMovies = createAsyncThunk(
	"movies/fetchSimilarMovies",
	async (movieId) => {
		const response = await (await fetch(get_Similar_Movies(movieId))).json();
		return response.results;
	}
);

export const fetchCurrentMovieDetails = createAsyncThunk(
	"movies/fetchCurrentMovieDetails",
	async (movieId) => {
		const movie = await (await fetch(get_Details(movieId))).json();
		const movieCredits = await (await fetch(get_Credits(movieId))).json();
		return { movie, movieCredits };
	}
);

export const fetchTrailers = createAsyncThunk(
	"movies/fetchTrailers",
	async (movieId) => {
		const response = await (await fetch(get_Videos(movieId))).json();
		console.log(response);
		return response.results;
	}
);

const initialState = {
	host,
	api_key,
	currentMovie: {
		status: "idle",
		movie: null,
		error: null,
		credits: null,
		trailers: null,
		similars: null,
	},
	popularMovies: { status: "idle", movies: [], error: null },
	topRatedMovies: { status: "idle", movies: [], error: null },
	searchedMovies: { status: "idle", movies: [], error: null },
};

const moviesReducer = createSlice({
	name: "movies",
	initialState,
	reducers: {
		setCurrentMovie: (state, action) => {
			state.currentMovie.movie = action.payload;
		},
		restoreCurrentMovieStatus: (state) => {
			state.currentMovie.status = "idle";
		},
	},
	extraReducers: (builder) => {
		//Most Popular
		builder.addCase(fetchPopularMovies.pending, (state, action) => {
			state.popularMovies.status = "loading";
		});
		builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
			state.popularMovies.status = "succeeded";
			state.popularMovies.movies = action.payload.results;
		});
		builder.addCase(fetchPopularMovies.rejected, (state, action) => {
			state.popularMovies.status = "failed";
			state.popularMovies.error = action.error.message;
		});
		//Top Rated
		builder.addCase(fetchTopRatedMovies.pending, (state, action) => {
			state.topRatedMovies.status = "loading";
		});
		builder.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
			state.topRatedMovies.status = "succeeded";
			state.topRatedMovies.movies = action.payload.results;
		});
		builder.addCase(fetchTopRatedMovies.rejected, (state, action) => {
			state.topRatedMovies.status = "failed";
			state.topRatedMovies.error = action.error.message;
		});
		//Movie Details
		builder.addCase(fetchCurrentMovieDetails.pending, (state, action) => {
			state.currentMovie.status = "loading";
		});
		builder.addCase(fetchCurrentMovieDetails.fulfilled, (state, action) => {
			state.currentMovie.status = "succeeded";
			state.currentMovie.movie = action.payload.movie;
			state.currentMovie.credits = action.payload.movieCredits;
		});
		builder.addCase(fetchCurrentMovieDetails.rejected, (state, action) => {
			state.currentMovie.status = "failed";
			state.currentMovie.error = action.error.message;
		});
		//Trailers
		builder.addCase(fetchTrailers.fulfilled, (state, action) => {
			state.currentMovie.trailers = action.payload;
		});
		//Similar
		builder.addCase(fetchSimilarMovies.fulfilled, (state, action) => {
			state.currentMovie.similars = action.payload;
		});
		//fetchSearchedMovies
		builder.addCase(fetchSearchedMovies.pending, (state, action) => {
			state.searchedMovies.status = "loading";
		});
		builder.addCase(fetchSearchedMovies.fulfilled, (state, action) => {
			state.searchedMovies.status = "succeeded";
			state.searchedMovies.movies = action.payload;
		});
		builder.addCase(fetchSearchedMovies.rejected, (state, action) => {
			state.searchedMovies.status = "failed";
			state.searchedMovies.error = action.error.message;
		});
	},
});

export const { setCurrentMovie, restoreCurrentMovieStatus } =
	moviesReducer.actions;
export default moviesReducer.reducer;
