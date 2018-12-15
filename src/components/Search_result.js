import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/searchAction";
import { Card, CardTitle } from "react-materialize";
import ProductCard from "./ProductCard";
import src02 from "../resources/Captura02.PNG";

class Search_result extends Component {
	componentDidMount = () => {
		this.props.fetchSearchResults();
	};

	renderList = () => {
		return this.props.searchResults.map(result => {
			return (
				<ProductCard
					image={src02}
					title={this.props.searchResults.title}
					description={this.props.searchResults.description}
					actions={[<a href="/">Product Link</a>]}
				>
					{result.description}
				</ProductCard>
			);
		});
	};

	render() {
		if (!this.props.searchResults) {
			return <div>No results</div>;
		}

		return <div className="container">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return { searchResults: state.props };
};

export default connect(
	mapStateToProps,
	{ fetchSearchResults }
)(Search_result);
