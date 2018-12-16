import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/searchAction";
import ProductCard from "./ProductCard";
import { Preloader } from "react-materialize";

class Search_result extends Component {
	renderList = () => {
		return this.props.searchResults.map(result => {
			return (
				<div key={result.id}>
					<ProductCard
						className="product-card"
						product={result}
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
			return (
				<div className="center">
					<Preloader />
				</div>
			);
		}

		return <div className="container">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	console.log(state);
	return { searchResults: state.searchResults };
};

export default connect(mapStateToProps)(Search_result);
