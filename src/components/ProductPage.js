import React from "react";
import { connect } from "react-redux";
import { unselectProduct } from "../actions/selectedProductAction";

import "../styles/basic.css";

import {
	Row,
	Card,
	CardPanel,
	Col,
	Collection,
	CollectionItem,
	ProgressBar,
	Preloader,
	CardTitle
} from "react-materialize";

class ProductPage extends React.Component {
	/*componentWillUnmount() {
		this.props.unselectProduct();
	}*/

	render() {
		if (!this.props.selectedProduct.urls) {
			return (
				<div className="center">
					<Preloader />
				</div>
			);
		}

		return (
			<div className="my-container">
				<Row>
					<Col s={12} m={6} l={8}>
						<CardPanel style={{ padding: "0" }}>
							<img
								style={{ height: "100%", width: "100%" }}
								src={this.props.selectedProduct.urls.regular}
							/>
						</CardPanel>
					</Col>
					<Col s={12} m={6} l={4}>
						<Collection className="blue-grey">
							<CollectionItem>
								<h2 className="center">{this.props.selectedProduct.id}</h2>
							</CollectionItem>
							<CollectionItem>
								<h4 className="center">Puntuación</h4>
							</CollectionItem>
							<CollectionItem>
								<h6 className="center">Distribuidor</h6>
							</CollectionItem>
						</Collection>
					</Col>
				</Row>
				<ProgressBar progress={100} />
				<Row>
					<CardPanel className="blue-grey">
						<h1 className="center">.</h1>
						<h1 className="center">{this.props.selectedProduct.description}</h1>
						<h1 className="center">.</h1>
					</CardPanel>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { selectedProduct: state.selectedProduct };
};

export default connect(
	mapStateToProps,
	{ unselectProduct }
)(ProductPage);
