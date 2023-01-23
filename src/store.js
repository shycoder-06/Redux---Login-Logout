import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const counterSlice = createSlice({
	name: "counter",
	initialState: { counter: 0 },
	reducers: {
		increment(state, action) {
			state.counter++;
		},
	},
});
export const actions = counterSlice.actions;
const store = configureStore({
	reducer: counterSlice.reducer,
});
export default store;
