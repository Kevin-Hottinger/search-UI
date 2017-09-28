// Include React
import React from '../../../setup/node_modules/react';
// Import SearchForm component
import SearchForm from '../components/SearchForm.jsx';
// Import SearchSuggest component
import SearchSuggest from '../components/SearchSuggest.jsx';

// Our application
export default class Page extends React.Component {

	// Render content
	render() {
		return(
			<article className="search">
				<SearchForm/>
				<SearchSuggest/>
			</article>
		);
	}

}
