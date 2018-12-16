import React from "react";
import { connect } from "react-redux";
import { fetchProductInfo } from "../actions/selectedProductAction";
import { Card, CardTitle } from "react-materialize";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
	onProductSelect = e => {
		this.props.fetchProductInfo(this.props.id);
	};

	render() {
		return (
			<Card
				horizontal
				className="blue-grey"
				header={
					<CardTitle image={this.props.product.urls.small}>
						{this.props.product.title}
					</CardTitle>
				}
				actions={
					<Link onClick={this.onProductSelect} to="/ProductPage">
						Detalles
					</Link>
				}
			>
				{this.props.product.description}
				<br />
				{this.props.product.rating}
			</Card>
		);
	}
}

export default connect(
	null,
	{ fetchProductInfo }
)(ProductCard);
