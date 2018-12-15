import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/searchAction";
import ProductCard from "./ProductCard";
import src02 from "../resources/Captura02.PNG";

class Search_result extends Component {
	renderList = () => {
		return this.props.searchResults.map(result => {
			return (
				<div>
					<ProductCard
						image={result.urls.regular}
						title={result.id}
						description={result.description}
						actions={[<a href="/">Product Link</a>]}
					>
						{result.description}
					</ProductCard>
				</div>
			);
		});
	};

	render() {
		console.log(this.props.searchResults);

		if (!this.props.searchResults) {
			return <div>No results</div>;
		}

		return <div className="container">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	console.log(state);
	return { searchResults: state.searchResults };
};

export default connect(mapStateToProps)(Search_result);
