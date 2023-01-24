import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectAllMovies } from "../store/movieSlice";
import React from "react";
import Search from "./Search";
import MovieItem from "./MovieItem";
// import axios from "axios";
import { API_KEY } from "../secrets";
const MovieResults = (props) => {
	const { url } = props;

	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const moviesList = useSelector(selectAllMovies);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				console.log(json);
			} catch (error) {
				console.log("error", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url]);

	const handleSearch = (value) => {
		setSearchResults(
			moviesList.filter((item) =>
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
