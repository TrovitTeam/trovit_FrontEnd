import React from "react";

import { connect } from "react-redux";
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
	renderContent() {
		if (!this.props.selectedProduct) {
			return (
				<div className="center">
					<Preloader />
				</div>
			);
		} else {
			return;
		}
	}

	render() {
		if (!this.props.selectedProduct.urls) {
			return (
				<div className="center">
					<Preloader />
				</div>
			);
		}

		return (
			<div className="container">
				<Row>
					<Col s={6}>
						<Card header={<CardTitle>Product 1</CardTitle>} />
					</Col>
					<Col s={6}>
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

export default connect(mapStateToProps)(ProductPage);
