import React from "react";
const urlComponent = "https://image.tmdb.org/t/p/w342";
const MovieItem = ({ movie }) => {
	if (!movie || !movie.poster_path) {
		return null;
	}
	return (
		<div className="col-sm-12 col-sm-3">
			<div className="thumbnail">
				<img
					src={urlComponent + movie.poster_path}
					alt={movie.title + " Image"}
				/>

				<div className="caption">
					<h3>Movie name: {movie.title}</h3>
					<p>overview: {movie.overview}</p>
				</div>
			</div>
		</div>
	);
};
export default MovieItem;
