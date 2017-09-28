// Include React
import React from '../../../setup/node_modules/react';
// Add support for proptypes
import PropTypes from '../../../setup/node_modules/prop-types';

// Display input form
const SearchForm = props => (

	<form className="search-form" role="search" onSubmit={props.onFormSubmit}>
		<input
			type="search"
			placeholder="Search for country"
			aria-label="Search for country"
			maxLength="100"
			onChange={props.onInputChange}
			value={props.inputVal}
		/>
	</form>

);

// Check callback functions and input value
SearchForm.propTypes = {
	onInputChange: PropTypes.func.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	inputVal: PropTypes.string.isRequired
};

export default SearchForm;
