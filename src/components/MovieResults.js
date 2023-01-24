import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import MovieItem from "./MovieItem";

const MovieResults = (props) => {
	const { query } = props;
	const filteredMovies = useSelector((state) =>
		state.movies.filter((item) =>
			item.title.toLowerCase().includes(query.toLowerCase())
		)
	);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				// Make API call
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [query]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div>
			<h1>Movie results will go here</h1>
			<Search />
			{filteredMovies.map((item) => {
				return <MovieItem movie={item} key={item.id} />;
			})}
		</div>
	);
};

export default MovieResults;
