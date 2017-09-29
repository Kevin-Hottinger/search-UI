// Include React
import React from '../../../setup/node_modules/react';
// Include axios
import axios from '../../../setup/node_modules/axios';
// Import component styles
import '../../css/search.scss';
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
			country: 'Country',
			capital: 'Capital'
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

	// Event handler for suggestion clicks
	onSuggestClick = (country) => () => {
		this.setState({ searchTerm: country});
		this.fetchData(country);
	}

	// Fetch json data for user input
	fetchData = (input) => {
		if (sessionStorage.getItem(input)) {
			this.fetchSessionStorage(input);
			return;
		}
		const that = this;

		axios.get('https://code.totaralms.com/countries-json.php', {
			params: {
				search: input,
				limit: 50
			}
		}).then(function(response) {
			that.setState({ suggestList: response.data.results});
			that.setSessionStorage(input, response.data.results);
		}).catch(function() {
			that.setState({ suggestList: that.props.suggestList});
			throw new Error('Bad response from server');
		});
	}

	// Reduce number of requests by storing fetched data
	setSessionStorage = (input, data) => {
		sessionStorage.setItem(input, JSON.stringify(data));
	}

	// Collect stored data
	fetchSessionStorage = (input) => {
		this.setState({ suggestList: JSON.parse(sessionStorage.getItem(input))});
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
					onSuggestClick={this.onSuggestClick}
				/>
			</article>
		);
	}

}
