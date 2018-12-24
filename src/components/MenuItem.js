import React from "react";
import { NavItem } from "react-materialize";

const MenuItem = props => {
	return (
		<NavItem
			className={props.align}
			onClick={e => {
				e.preventDefault();
				props.history.push(props.link);
			}}
		>
			{props.text}
		</NavItem>
	);
};

export default MenuItem;
