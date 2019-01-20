import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProductsSearch,
  cleanSearchResults
} from "../actions/searchAction";
import { Preloader, Row, Pagination } from "react-materialize";
import GridList from "./GridList";
import SearchBar from "./SearchBar";

import "../styles/basic.css";

class SearchResult extends Component {
  state = { page: 1 };

  componentDidMount() {
    this.props.fetchProductsSearch(
      this.props.match.params.term,
      this.state.page
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.term !== prevProps.match.params.term) {
      this.props.fetchProductsSearch(
        this.props.match.params.term
      );
    }

    if (this.state.page !== prevState.page) {
      this.props.fetchProductsSearch(
        this.props.match.params.term
      );
    }
  }

  componentWillUnmount() {
    this.props.cleanSearchResults();
  }

  render() {
    if (!this.props.searchResults.length) {
      return (
        <div className="preloader-container">
          <Preloader className="preloader" />
        </div>
      );
    }
    return (
      <div className="my-container">
        <Row style={{ margin: "10px 0" }}>
          <SearchBar />
        </Row>
        <div>
          <h3>{this.props.searchResults.length} resultado(s).</h3>
        </div>
        <GridList list={this.props.searchResults} />
        <div className="container center">
          <Pagination
            onSelect={page => {
              this.setState({ page });
            }}
            items={this.props.searchResults.total_pages}
            activePage={1}
            maxButtons={10}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { searchResults: state.searchResults };
};

export default connect(
  mapStateToProps,
  { fetchProductsSearch, cleanSearchResults }
)(SearchResult);
