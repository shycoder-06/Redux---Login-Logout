import React from "react";
import { useState } from "react";
import {
	Form,
	FormGroup,
	FormControl,
	FormLabel,
	Button,
} from "react-bootstrap";

const Search = () => {
	const [query, setQuery] = useState("");
	const onSearch = () => {
		console.log("Movie: ", query);
	};
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
