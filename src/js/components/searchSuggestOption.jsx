// Include React
import React from '../../../setup/node_modules/react';
// Add support for proptypes
import PropTypes from '../../../setup/node_modules/prop-types';

// Display list Item
const SearchSuggestOption = props => (
	<li onClick={props.onSuggestClick(props.country)}>
		{props.country}
	</li>
);

// Ensure required props are passed
SearchSuggestOption.propTypes = {
	country: PropTypes.string.isRequired,
	onSuggestClick: PropTypes.func.isRequired
};

export default SearchSuggestOption;
