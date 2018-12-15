import React from "react";

import { connect } from "react-redux";
import { Row, Card, Col, CardTitle, Button } from "react-materialize";

class ProductPage extends React.Component {
	render() {
		return (
			<div className="container">
				<Row>
					<Col s={6}>
						<h1 className="center">Imagen</h1>
					</Col>
					<Col s={6}>
						<h1 className="center">Titulo</h1>
						<h3 className="center">Distribuidor</h3>
						<h1 className="center">Puntuación</h1>
					</Col>
				</Row>
				<Row>
					<h1 className="center">.</h1>
					<h1 className="center">.</h1>
					<h1 className="center">.</h1>
					<h1 className="center">Descripción</h1>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { selectedProduct: state.props };
};

export default connect(mapStateToProps)(ProductPage);
