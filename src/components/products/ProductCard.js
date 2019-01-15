import React from "react";
import { connect } from "react-redux";
import { fetchSelectedProduct } from "../../actions/selectedProductAction";
import { Card, CardTitle } from "react-materialize";
import { Link } from "react-router-dom";
import defaultImage from "../../resources/upload.png";

class ProductCard extends React.Component {
  onProductSelect = e => {
    this.props.fetchSelectedProduct(this.props.product.id);
  };

  renderCard() {
    const { urls } = this.props.product;
    if (this.props.detailed) {
      console.log(this.props.product);
      return (
        <Link
          onClick={this.onProductSelect}
          to={`/ProductPage/${this.props.product.id}`}>
          <Card
            horizontal
            className="white"
            header={<CardTitle image={urls ? urls.regular : defaultImage} />}
            title={this.props.product.id}>
            {this.props.product.rating}
          </Card>
        </Link>
      );
    }
    return (
      <Link
        onClick={this.onProductSelect}
        to={`/ProductPage/${this.props.product.id}`}>
        <Card
          className="white"
          header={<CardTitle image={urls ? urls.regular : defaultImage} />}
          title={this.props.product.id}>
          {this.props.product.rating}
        </Card>
      </Link>
    );
  }

  render() {
    return <div>{this.renderCard()}</div>;
  }
}

export default connect(
  null,
  { fetchSelectedProduct }
)(ProductCard);
