import React from "react";
import { connect } from "react-redux";
import { fetchProductInfo } from "../actions/selectedProductAction";
import { Card, CardTitle } from "react-materialize";

class ProductCard extends React.Component {
	onProductSelect = id => {
		this.fetchProductInfo(id);
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
					<a onClick={this.onProductSelect(this.props.id)} href="/Product_page">
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
