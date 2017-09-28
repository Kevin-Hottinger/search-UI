// Include React
import React from '../../../setup/node_modules/react';
// Import SearchForm component
import SearchForm from '../components/SearchForm.jsx';
// Import SearchSuggest component
import SearchSuggest from '../components/SearchSuggest.jsx';

// Our application
export default class Page extends React.Component {

	// Initialise state
	state = {
		searchTerm: '',
	}

	// Event handler for input field
	onInputChange = (e) => {
		const input = e.target.value;
		this.setState({ searchTerm: input});
	};

	// Prevent form from submitting
	onFormSubmit = (e) => {
		e.preventDefault();
	}

	// Render content
	render() {
		return(
			<article className="search">
				<SearchForm
					onInputChange={this.onInputChange}
					onFormSubmit={this.onFormSubmit}
					inputVal={this.state.searchTerm}
				/>
				<SearchSuggest/>
			</article>
		);
	}

}
