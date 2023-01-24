import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		fetchMoviesSuccess: (state, action) => {
			console.log("reached fetchMoviesSuccess");
			state.push(...action.payload);
		},
	},
});
export const { fetchMoviesSuccess } = movieSlice.actions;

export const selectAllMovies = (state) => state.movies;

export default movieSlice.reducer;
