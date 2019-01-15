import React, { Component } from "react";
import {
  Row,
  Card,
  Col,
  CardTitle,
  Table,
  ProgressBar,
  Button,
  Pagination,
  Modal
} from "react-materialize";
import srcUP from "../../resources/upload.png";
import axios from "axios";
import Product from "./Product";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { baseUrl } from "../../resources/url.js";
import { fetchUserProducts } from "../../actions/productActions";
import GridList from "../GridList";

class ProductInfo extends Component {
  componentDidMount() {
    this.props.fetchUserProducts(this.props.match.params.id);
  }

  componentWillUnmount() {
    //this.props.cleanUserProducts();
  }

  render() {
    if (!this.props.userProducts) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <GridList col="3" detailed list={this.props.userProducts} />
        <div className="container center">
          <Pagination items={10} activePage={1} maxButtons={8} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    userProducts: state.userProducts
  };
}
export default connect(
  mapStateToProps,
  { fetchUserProducts }
)(ProductInfo);
