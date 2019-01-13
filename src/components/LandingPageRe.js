import React from "react";
import { connect } from "react-redux";
import Carrousel from "./Carrousel";
import GridList from "./GridList";
import { fetchSearchResults } from "../actions/searchAction";

import "../styles/landingPage.css";

class LandingPageRe extends React.Component {
  componentDidMount() {
    this.props.fetchSearchResults("computers");
  }

  render() {
    const products = this.props.products;

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
  { fetchSearchResults }
)(LandingPageRe);
