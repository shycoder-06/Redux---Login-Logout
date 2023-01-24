import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		reducers: {
			fetchMoviesSuccess: (state, action) => {
				state.push(...action.payload);
			},
		},
	},
});
export const { fetchMoviesSuccess } = movieSlice.actions;
export const fetchMovies = () => async (dispatch) => {
	try {
		// eslint-disable-next-line no-undef
		const response = await axios.get(
			"https://api.themoviedb.org/3/movie/top_rated?api_key=<API_KEY>&language=en-US&page=1"
		);
		const movies = response.data.results;
		dispatch(fetchMoviesSuccess(movies));
	} catch (err) {
		console.log(err);
	}
};
export const selectAllMovies = (state) => state.movies;

export const { moviesAdded } = movieSlice.actions;

export default movieSlice.reducer;
