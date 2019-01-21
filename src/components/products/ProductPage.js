import React from "react";
import { connect } from "react-redux";
import {
  cleanSelectedProduct,
  fetchSelectedProduct
} from "../../actions/selectedProductAction";
import defaultImage from "../../resources/upload.png";
import Rating from "react-rating";
import "../../styles/basic.css";

import {
  Row,
  CardPanel,
  Col,
  Collection,
  CollectionItem,
  ProgressBar,
  Preloader,
  Icon
} from "react-materialize";

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.fetchSelectedProduct(
      this.props.match.params.did,
      this.props.match.params.pid
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchSelectedProduct(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.cleanSelectedProduct();
  }

  render() {
    if (!this.props.selectedProduct.id) {
      return (
        <div className="preloader-container">
          <Preloader className="preloader" />
        </div>
      );
    }

    const product = this.props.selectedProduct;

    return (
      <div className="my-container">
        <Row>
          <Col s={12} m={6} l={8}>
            <CardPanel style={{ padding: "0" }}>
              <img
                alt=""
                style={{ height: "100%", width: "100%" }}
                src={product.image ? product.image : defaultImage}
              />
            </CardPanel>
          </Col>
          <Col s={12} m={6} l={4}>
            <Collection className="blue-grey">
              <CollectionItem>
                <h2 className="center">{product.productName}</h2>
              </CollectionItem>
              <CollectionItem className="center">
                <Rating
                  readonly={this.props.currentUser.id == product.distributor_id}
                  initialRating={product.score}
                  emptySymbol={
                    <Icon small className="empty">
                      star_border
                    </Icon>
                  }
                  fullSymbol={
                    <Icon small className="filled">
                      star
                    </Icon>
                  }
                />
                <h6 className="center">
                  {product.score
                    ? `${product.score.substring(0, 4)} of 5`
                    : 0.0}
                </h6>
              </CollectionItem>
              <CollectionItem>
                <h4 className="center">{product.brand}</h4>
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
        <ProgressBar progress={100} />
        <Row>
          <CardPanel className="blue-grey">
            <h1 className="center">.</h1>
            <h4 className="center">{product.description}</h4>
            <h1 className="center">.</h1>
          </CardPanel>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct,
    currentUser: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { cleanSelectedProduct, fetchSelectedProduct }
)(ProductPage);
