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
} from "../GET_APIS/api";

export const fetchPopularMovies = createAsyncThunk(
	"movies/fetchPopularMovies",
	async () => {
		const response = await (await fetch(get_Popular_Movies())).json();
		return response;
	}
);

const initialState = {
	host,
	api_key,
	status: "idle",
	error: null,
	popularMovies: [],
};

const moviesReducer = createSlice({
	name: "movies",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPopularMovies.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
			state.status = "succeeded";
			console.log(action.payload.results);
			state.popularMovies = action.payload.results;
		});
		builder.addCase(fetchPopularMovies.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export const { addMovies } = moviesReducer.actions;
export default moviesReducer.reducer;
