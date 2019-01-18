import React from "react";
import { connect } from "react-redux";
import { fetchSelectedProduct } from "../../actions/selectedProductAction";
import { Card, CardTitle, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import defaultImage from "../../resources/upload.png";
import Rating from "react-rating";
import "../../styles/rating.css";
import { rateProduct } from "../../actions/productActions";

class ProductCard extends React.Component {
  onRated = value => {
    this.props.rateProduct(this.props.product.id, value);
  };

  renderRating() {
    return (
      <div>
        <Rating
          onChange={this.onRated}
          className="rating"
          readonly={this.props.product.rated ? true : false}
          initialRating={this.props.product.rating}
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
      </div>
    );
  }

  renderCard() {
    const { urls } = this.props.product;
    if (this.props.detailed) {
      return (
        <Link to={`/ProductPage/${this.props.product.id}`}>
          <Card
            horizontal
            className="white"
            style={{ color: "black", display: "flex" }}
            header={<CardTitle image={urls ? urls.regular : defaultImage} />}
            title={this.props.product.productName}>
            {this.props.product.description}

            {this.renderRating()}
          </Card>
        </Link>
      );
    }
    return (
      <Link to={`/ProductPage/${this.props.product.id}`}>
        <Card
          className="white"
          header={<CardTitle image={urls ? urls.small : defaultImage} />}
          title={this.props.product.id}
        />
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
