import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/searchAction";
import { Card, CardTitle } from "react-materialize";
import ProductCard from "./ProductCard";
import src02 from "../resources/Captura02.PNG";

class Search_result extends Component {
	render() {
		return <div className="container">Search_result</div>;
	}
}

export default Search_result;
