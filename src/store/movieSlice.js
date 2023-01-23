import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	{ id: "0", name: "movie 1" },
	{ id: "1", name: "movie 2" },
	{ id: "2", name: "movie 3" },
];

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		moviesReducer: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(name) {
				return {
					payload: {
						id: nanoid(),
						name,
					},
				};
			},
		},
	},
});

export const selectAllMovies = (state) => state.movies;

export const movieActions = movieSlice.actions;

export default movieSlice;
