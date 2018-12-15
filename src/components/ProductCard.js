import React from "react";
import { connect } from "react-redux";
import { fetchProductInfo } from "../actions/selectedProductAction";
import { Card, CardTitle } from "react-materialize";

class ProductCard extends React.Component {
	onProductSelect = e => {
		e.preventDefault();
		this.props.fetchProductInfo(5);
	};

	render() {
		return (
			<Card
				horizontal
				className="blue-grey"
				header={
					<CardTitle image={this.props.image}>{this.props.title}</CardTitle>
				}
				actions={
					<a onClick={this.onProductSelect} href="/ProductPage">
						Detalles
					</a>
				}
			>
				{this.props.description}
				<br />
				{this.props.rating}
			</Card>
		);
	}
}

export default connect(
	null,
	{ fetchProductInfo }
)(ProductCard);
