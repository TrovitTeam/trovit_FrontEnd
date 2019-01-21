import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Pagination, Preloader, Button } from "react-materialize";
import { connect } from "react-redux";
import {
  fetchUserProducts,
  cleanUserProducts
} from "../../actions/productActions";
import { fetchImageProduct, cleanImageProduct } from "../../actions/imageProductActions";
import GridList from "../GridList";
import ProductCreate from "./ProductCreate";
import { threadId } from "worker_threads";

class ProductInfo extends Component {
  state = { page: 1 };

  componentDidMount() {
    this.props.fetchUserProducts(this.props.match.params.id, this.state.page);
    this.props.fetchImageProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      this.props.fetchUserProducts(this.props.match.params.id, this.state.page);
    }
  }

  componentWillUnmount() {
    this.props.cleanUserProducts();
    this.props.cleanImageProduct();
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
          <Link to="/Product/new">
            <Button>Create a New Product</Button>
          </Link>
          <Pagination
            onSelect={page => {
              this.setState({ page });
            }}
            items={10}
            activePage={1}
            maxButtons={8}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    userProducts: state.userProducts,
    productImage: state.productImage
  };
}
export default connect(
  mapStateToProps,
  { fetchUserProducts, cleanUserProducts, fetchImageProduct, cleanImageProduct }
)(ProductInfo);
