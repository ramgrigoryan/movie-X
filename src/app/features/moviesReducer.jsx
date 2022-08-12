import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
	host,
	api_key,
	get_Movies,
	get_Details,
	get_Images,
	get_Videos,
	get_Credits,
	get_Popular_Movies,
	get_Top_Rated,
	get_Now_Playing,
	get_Upcoming,
} from "../GET_APIS/api";

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
export const fetchCurrentMovieDetails = createAsyncThunk(
	"movies/fetchCurrentMovieDetails",
	async (movieId) => {
		const movie = await (await fetch(get_Details(movieId))).json();
		const movieCredits = await (await fetch(get_Credits(movieId))).json();
		return { movie, movieCredits };
	}
);

const initialState = {
	host,
	api_key,
	currentMovie: { status: "idle", movie: null, error: null, credits: null },
	popularMovies: { status: "idle", movies: [], error: null },
	topRatedMovies: { status: "idle", movies: [], error: null },
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
	},
});

export const { setCurrentMovie, restoreCurrentMovieStatus } =
	moviesReducer.actions;
export default moviesReducer.reducer;
