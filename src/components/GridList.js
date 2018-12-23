import React from "react";
import ProductCard from "./ProductCard";
import "../styles/gridList.css";

const GridList = props => {
	console.log(props.list);

	const renderList = props.list.map(item => {
		return (
			<div key={item.id}>
				<ProductCard product={item} />
			</div>
		);
	});

	return (
		<div>
			<div className="grid-list">{renderList}</div>
		</div>
	);
};

export default GridList;
