import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/searchAction";
import { Input, Icon } from "react-materialize";

class UnsplashSearchBar extends Component {
	state = {
		term: ""
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.fetchSearchResults(this.state.term);
		this.props.history.push("Search_result");
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div className="input-field">
						<Input
							s={6}
							className="black-text"
							type="text"
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						>
							<Icon>search</Icon>
						</Input>
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
	{ fetchSearchResults }
)(UnsplashSearchBar);
