// Include React
import React from '../../../setup/node_modules/react';

// Display input form
const SearchForm = props => (

	<form className="search-form" role="search">
		<input
			type="search"
			placeholder="Search for country"
			aria-label="Search for country"
			maxLength="100"
		/>
	</form>

);

export default SearchForm;
