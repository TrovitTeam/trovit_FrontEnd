import React from "react";
import { Card, CardTitle } from "react-materialize";

const ProductCard = props => {
	return (
		<Card horizontal
			className="blue-grey"
			header={<CardTitle image={props.image}>{props.title}</CardTitle>}
			actions={<a href="/">Detalles</a>}
		>
			{props.description}
			<br />
			{props.rating}
		</Card>
	);
};

export default ProductCard;
