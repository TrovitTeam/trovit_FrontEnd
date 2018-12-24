import React from "react";
import { connect } from "react-redux";
import { fetchSelectedProduct } from "../actions/selectedProductAction";
import { Card, CardTitle } from "react-materialize";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
	onProductSelect = e => {
		this.props.fetchSelectedProduct(this.props.product.id);
	};

	render() {
		return (
			<Link onClick={this.onProductSelect} to="/ProductPage">
				<Card
					className="blue-grey"
					header={<CardTitle image={this.props.product.urls.regular} />}
					title={this.props.product.id}
				>
					{this.props.product.rating}
				</Card>
			</Link>
		);
	}
}

export default connect(
	null,
	{ fetchSelectedProduct }
)(ProductCard);
