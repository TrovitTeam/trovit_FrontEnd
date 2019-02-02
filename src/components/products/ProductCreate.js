import React from "react";
import { Row, Col, Preloader, Input} from "react-materialize";
import { connect } from "react-redux";
import { productCreateRequest } from "../../actions/productActions";
import _ from "lodash";
import ProductForm from "./ProductForm";

class ProductCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            producType: "",
            price: "",
            brand: "",
            quantity: "",
            description: ""
        };
    }

    handleSubmit(event) {
        this.props.productCreateRequest(this.state).then(() => {
            this.context.router.history.push("/");
        });
    }

    onSubmit = formValues => {
        this.props.productCreateRequest(formValues);
    };

  render() {

    return (
      <div>
        <Row>
          <Col className="offset-s4" s={4}>
            <blockquote>
              <h1 className="center">Create a Product</h1>
            </blockquote>
          </Col>
        </Row>
        <Row>
          <Col s={6} className="offset-s3">
            <ProductForm
              onSubmit={this.onSubmit}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(null, {productCreateRequest})(ProductCreate);
