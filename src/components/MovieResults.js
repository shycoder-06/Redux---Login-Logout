import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import Search from "./Search";
import MovieItem from "./MovieItem";
import { selectAllMovies } from "../store/movieSlice";

const MovieResults = () => {
	const movies = useSelector(selectAllMovies);
	useEffect(() => {
		console.log(movies);
	}, [movies]);
	return (
		<div className="col-md-12">
			{movies.map((movie, index) => (
				<MovieItem key={index} movie={movie} />
			))}
		</div>
	);
};

export default MovieResults;
