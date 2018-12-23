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
			<Card
				className="blue-grey"
				header={<CardTitle image={this.props.product.urls.regular} />}
				title={this.props.product.id}
				actions={
					<Link onClick={this.onProductSelect} to="/ProductPage">
						<p>Details</p>
					</Link>
				}
			>
				{this.props.product.rating}
			</Card>
		);
	}
}

export default connect(
	null,
	{ fetchSelectedProduct }
)(ProductCard);
