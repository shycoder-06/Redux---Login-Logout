import React from "react";
import MovieResults from "./MovieResults";

const App = () => {
	return (
		<div className="container">
			<div className="text-center">
				<div className="jumbotron">
					<h1>Movies App</h1>
					<p>Who doesn't love movies</p>
				</div>
			</div>
			<div className="row">
				<MovieResults query="Your query string here" />
			</div>
		</div>
	);
};

export default App;
