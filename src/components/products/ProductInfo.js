import React, { Component } from "react";
import { Pagination, Preloader } from "react-materialize";
import { connect } from "react-redux";
import {
  fetchUserProducts,
  cleanUserProducts
} from "../../actions/productActions";
import GridList from "../GridList";

class ProductInfo extends Component {
  componentDidMount() {
    this.props.fetchUserProducts(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.cleanUserProducts();
  }

  render() {
    if (!this.props.userProducts) {
      return (
        <div className="preloader-container">
          <Preloader className="preloader" />
        </div>
      );
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
  { fetchUserProducts, cleanUserProducts }
)(ProductInfo);
