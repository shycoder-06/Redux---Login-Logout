import React from "react";
// const urlComponent = "https://image.tmdb.org/t/p/w342";
const MovieItem = ({ movies }) => {
	return (
		<div className="col-sm-12 col-sm-3">
			<div className="thumbnail">
				{/* <img
					src={urlComponent + movie.poster_path}
					alt={movie.title + " Image"}
				/> */}
				<div className="caption">
					<h3>{movies.name}</h3>
					<p>{movies.overview}</p>
					<p>Release Date - {movies.release_date}</p>
					<p>Ratings = {movies.vote_average}</p>
					<p>
						<a href="#" className="btn btn-primary" role="button">
							Button
						</a>{" "}
						<a href="#" className="btn btn-default" role="button">
							Button
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};
export default MovieItem;
