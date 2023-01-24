import React, { useState } from "react";
import {
	Form,
	FormGroup,
	FormControl,
	FormLabel,
	Button,
} from "react-bootstrap";
import { API_KEY } from "../secrets";
import { useDispatch } from "react-redux";
import { fetchMoviesSuccess } from "../store/movieSlice";
import MovieResults from "./MovieResults";

const Search = (props) => {
	const dispatch = useDispatch();
	const [query, setQuery] = useState("");
	const { handleSearch } = props;
	const onSearch = () => {
		console.log("Movie: ", query);
		let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
		fetch(url, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((jsonObj) => {
				dispatch(fetchMoviesSuccess(jsonObj.results));
				handleSearch(query);
				<MovieResults url={url} />;
			});
	};

	// const movies = useSelector(selectAllMovies);
	return (
		<div>
			<Form inline>
				<FormGroup>
					<FormLabel>Search</FormLabel>
					<FormControl
						type="text"
						placeholder="Search any movie"
						onChange={(event) => setQuery(event.target.value)}
					></FormControl>
					<Button bsStyle="success" onClick={onSearch}>
						Submit
					</Button>
				</FormGroup>
			</Form>
		</div>
	);
};

export default Search;
