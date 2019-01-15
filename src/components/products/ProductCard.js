import React from "react";
import { connect } from "react-redux";
import { fetchSelectedProduct } from "../../actions/selectedProductAction";
import { Card, CardTitle, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import defaultImage from "../../resources/upload.png";
import Rating from "react-rating";
import "../../styles/icons.css";
import { rateProduct } from "../../actions/productActions";

class ProductCard extends React.Component {
  renderRating() {
    return (
      <div>
        <Rating
          readonly={this.props.product.rated ? true : false}
          initialRating={this.props.product.rating}
          emptySymbol={<Icon className="empty">star_border</Icon>}
          fullSymbol={<Icon className="filled">star</Icon>}
        />
      </div>
    );
  }

  renderCard() {
    const { urls } = this.props.product;
    if (this.props.detailed) {
      console.log(this.props.product);
      return (
        <Link to={`/ProductPage/${this.props.product.id}`}>
          <Card
            horizontal
            className="white"
            header={<CardTitle image={urls ? urls.regular : defaultImage} />}
            title={this.props.product.id}>
            {this.renderRating()}
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
          {this.renderRating()}
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
  { fetchSelectedProduct, rateProduct }
)(ProductCard);
