import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/searchAction";
import ProductCard from "./ProductCard";
import ProductCardUnsplash from "./ProductCardUnsplash";
import { Preloader, Col, Row } from "react-materialize";
import GridList from "./GridList";
import SearchBar from "./SearchBar";

import "../styles/basic.css";

class Search_result extends Component {
	render() {
		console.log(this.props.searchResults);

		if (!this.props.searchResults.results) {
			return (
				<div className="center" style={{ height: "100%", marginTop: "200px" }}>
					<Preloader />
				</div>
			);
		}

		return (
			<div className="my-container">
				<Row style={{ margin: "10px 0" }}>
					<SearchBar />
				</Row>
				<div>
					<h3>{this.props.searchResults.total} resultados.</h3>
				</div>
				<GridList list={this.props.searchResults.results} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { searchResults: state.searchResults };
};

export default connect(mapStateToProps)(Search_result);
