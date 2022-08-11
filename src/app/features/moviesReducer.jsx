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

const initialState = {
	host,
	api_key,
	popularMovies: { status: "idle", movies: [], error: null },
	topRatedMovies: { status: "idle", movies: [], error: null },
};

const moviesReducer = createSlice({
	name: "movies",
	initialState,
	reducers: {},
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
	},
});

export default moviesReducer.reducer;
