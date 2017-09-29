// Include React
import React from '../../../setup/node_modules/react';
// Add support for proptypes
import PropTypes from '../../../setup/node_modules/prop-types';

// Display list Item
const SearchSuggestOption = props => (

	/*
		This leaves the door open to a cross-site scripting (XSS)
		attack but as this is modified data from the api rather than
		user entered, the risk is minimal. I have left in for demo purposes
		but in a real world application next step would be to have the
		markup escaped and then to see if the API could be extended for this 
		functionality.
	*/
	<li onClick={props.onSuggestClick(props.country)}
		dangerouslySetInnerHTML={{ __html: props.htmlCountry + ' : ' + props.htmlCapital }}>
	</li>

);

// Ensure required props are passed
SearchSuggestOption.propTypes = {
	country: PropTypes.string.isRequired,
	htmlCountry: PropTypes.string.isRequired,
	htmlCapital: PropTypes.string.isRequired,
	onSuggestClick: PropTypes.func.isRequired
};

export default SearchSuggestOption;
