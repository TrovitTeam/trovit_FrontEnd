import React from "react";
import { connect } from "react-redux";
import Carrousel from "./Carrousel";
import GridList from "./GridList";
import { fetchProductsSearch } from "../actions/searchAction";
import { Preloader } from "react-materialize";

import "../styles/landingPage.css";

class LandingPageRe extends React.Component {
  componentDidMount() {
    this.props.fetchProductsSearch("Example");
  }

  render() {
    const products = this.props.products;

    if (!products) {
      return (
        <div className="preloader-container">
          <Preloader className="preloader" />
        </div>
      );
    }

    return (
      <div className="landing-page">
        <div>
          <Carrousel />
        </div>
        <div>
          <GridList list={products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.searchResults.results
  };
};

export default connect(
  mapStateToProps,
  { fetchProductsSearch }
)(LandingPageRe);
