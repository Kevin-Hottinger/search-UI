// Include React
import React from '../../../setup/node_modules/react';
// Add support for proptypes
import PropTypes from '../../../setup/node_modules/prop-types';
// Import SearchSuggestOption component
import SearchSuggestOption from '../components/SearchSuggestOption.jsx';
// Import suggestion list styles
import '../../css/searchSuggest.scss';

// Display suggestion section and loop through countries
const SearchSuggest = props => (

	<section className="search-suggest">
		<h1>Suggestions</h1>
		<ul>
			{props.searchData.map(function(result) {
				return (
					<SearchSuggestOption
						key={result.country}
						country={result.country}
					/>
				);
			})}
		</ul>
	</section>

);

// Ensure required props are passed
SearchSuggest.propTypes = {
	searchData: PropTypes.array.isRequired,
};

export default SearchSuggest;
