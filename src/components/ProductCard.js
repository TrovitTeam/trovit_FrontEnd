import React from "react";
import { connect } from "react-redux";
import { fetchSelectedProduct } from "../actions/selectedProductAction";
import { Card, CardTitle } from "react-materialize";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
	onProductSelect = e => {
		this.props.fetchSelectedProduct(this.props.id);
	};

	render() {
		return (
			<Card
				horizontal
				className="blue-grey"
				header={
					<CardTitle image={this.props.product.urls}>
						{this.props.product.title}
					</CardTitle>
				}
				actions={
					<Link onClick={this.onProductSelect} to="/ProductPage">
						<p>Details</p>
					</Link>
				}
			>
				<p className="flow-text truncate">{this.props.product.description}</p>
				<br />
				{this.props.product.rating}
			</Card>
		);
	}
}

export default connect(
	null,
	{ fetchSelectedProduct }
)(ProductCard);
