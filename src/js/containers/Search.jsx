// Include React
import React from '../../../setup/node_modules/react';
// Include axios
import axios from '../../../setup/node_modules/axios';
// Import SearchForm component
import SearchForm from '../components/SearchForm.jsx';
// Import SearchSuggest component
import SearchSuggest from '../components/SearchSuggest.jsx';

// Our application
export default class Page extends React.Component {

	// Initialise state
	state = {
		searchTerm: '',
		suggestList: this.props.suggestList
	}

	// Set default prop for data placeholder
	static defaultProps = {
		suggestList: [{
			country: '...'
		}]
	}

	// Event handler for input field
	onInputChange = (e) => {
		const input = e.target.value;
		this.setState({ searchTerm: input});
		this.fetchData(input);
	};

	// Prevent form from submitting
	onFormSubmit = (e) => {
		e.preventDefault();
	}

	// Fetch json data for user input
	fetchData = (input) => {

		const that = this;

		axios.get('https://code.totaralms.com/countries-json.php', {
			params: {
				search: input,
				limit: 50
			}
		}).then(function(response) {
			that.setState({ suggestList: response.data.results});
		}).catch(function() {
			that.setState({ suggestList: that.props.suggestList});
			throw new Error('Bad response from server');
		});
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
				<SearchSuggest
					searchData={this.state.suggestList}
				/>
			</article>
		);
	}

}
