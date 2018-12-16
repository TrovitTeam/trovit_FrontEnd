import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsSearch } from "../actions/searchAction";

class SearchBar extends Component {
	state = {
		term: ""
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.fetchProductsSearch(this.state.term);
		this.props.history.push("Search_result");
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div className="input-field">
						<input
							className="black-text"
							type="text"
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
						<label className="label-icon" htmlFor="search" />
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { searchResults: state.props };
};

export default connect(
	mapStateToProps,
	{ fetchProductsSearch }
)(SearchBar);
