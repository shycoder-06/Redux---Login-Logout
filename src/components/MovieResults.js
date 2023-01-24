import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectAllMovies } from "../store/movieSlice";
import React from "react";
import Search from "./Search";
import MovieItem from "./MovieItem";
// import { API_KEY } from "../secrets";

const MovieResults = (props) => {
	const { query } = props;
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const moviesList = useSelector(selectAllMovies);

	useEffect(() => {
		console.log("test reached useeffect");
		const fetchData = async () => {
			try {
				const url = `https://api.themoviedb.org/3/search/movie?api_key=56e5571f3e8fff41c0519c7d767b519a&language=en-US&page=1&include_adult=false&query=${query}`;
				const response = await fetch(url);
				const json = await response.json();
				console.log(json.results);

				setSearchResults(json.results);
			} catch (error) {
				console.log("error", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [query]);
	const handleSearch = (value) => {
		console.log(searchResults);
		setSearchResults(
			searchResults.filter((item) =>
				item.title.toLowerCase().includes(value.toLowerCase())
			)
		);
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div>
			<h1>Movie results will go here</h1>
			<Search handleSearch={handleSearch} />
			{searchResults.map((item) => {
				return <MovieItem movie={item} key={item.id} />;
			})}
		</div>
	);
};

export default MovieResults;
