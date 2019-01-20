import React, { Component } from "react";
import { Pagination, Preloader, Button, Link } from "react-materialize";
import { connect } from "react-redux";
import {
  fetchUserProducts,
  cleanUserProducts
} from "../../actions/productActions";
import GridList from "../GridList";
import ProductCreate from "./ProductCreate";

class ProductInfo extends Component {
  state = { page: 1 };

  componentDidMount() {
    this.props.fetchUserProducts(this.props.match.params.id, this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      this.props.fetchUserProducts(this.props.match.params.id, this.state.page);
    }
  }

  componentWillUnmount() {
    this.props.cleanUserProducts();
  }

  render() {
    if (!this.props.userProducts) {
      return (
        <div className="preloader-container">
          <Preloader className="preloader" />
          <Button>Create a Product</Button>
        </div>
      );
    }

    return (
      <div>
        <GridList col="3" detailed list={this.props.userProducts} />
        <Button>Create a Product</Button>
        <div className="container center">
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
    userProducts: state.userProducts
  };
}
export default connect(
  mapStateToProps,
  { fetchUserProducts, cleanUserProducts }
)(ProductInfo);
