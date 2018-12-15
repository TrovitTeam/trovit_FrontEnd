import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/searchAction";
import {Col, Table} from 'react-materialize'
import ProductCard from "./ProductCard";

class Search_result extends Component {
	renderList = () => {
		return this.props.searchResults.map(result => {
			return (
<<<<<<< HEAD
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
=======
          <ProductCard
          className = "product-card"
					image={result.urls.regular}
					title={result.title}
					description={this.props.searchResults.description}
					actions={[<a href="/">Product Link</a>]}>
            {result.description}
          </ProductCard>
>>>>>>> 3f8d1bfd69bcbcb04c31e1e6aba779c4328f51b3
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
