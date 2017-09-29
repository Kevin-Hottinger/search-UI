// Include React
import React from '../../../setup/node_modules/react';
// Add support for proptypes
import PropTypes from '../../../setup/node_modules/prop-types';

// Display list Item
const SearchSuggestOption = props => (
	<li>
		{props.country}
	</li>
);

// Ensure required props are passed
SearchSuggestOption.propTypes = {
	country: PropTypes.string.isRequired,
};

export default SearchSuggestOption;