import React, { useState } from "react";
import {
	Form,
	FormGroup,
	FormControl,
	FormLabel,
	Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { movies } from "../actions";
import { API_KEY } from "../secrets";
import { fetchMoviesSuccess } from "../store/movieSlice";

const Search = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();
	const handleSearch = async () => {
		console.log("Movie: ", query);
		let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
		let response = await fetch(url, { method: "GET" });
		let jsonObj = await response.json();
		console.log(jsonObj.results);
		dispatch(fetchMoviesSuccess([]));
		dispatch(fetchMoviesSuccess(jsonObj.results));
		setQuery("");
	};

	return (
		<div>
			<Form inline>
				<FormGroup>
					<FormLabel>Search: </FormLabel>{" "}
					<FormControl
						type="text"
						placeholder="Search any movie"
						onChange={(event) => setQuery(event.target.value)}
					></FormControl>{" "}
					<Button bsStyle="success" onClick={handleSearch}>
						Submit
					</Button>
				</FormGroup>
			</Form>
		</div>
	);
};

export default Search;
