import React, { Component } from 'react';
import {Row} from 'react-materialize'
import ProductIn from "./ProductIn.js"
import {connect} from "react-redux"
import {productCreateRequest} from "../actions/productActions.js";
import PropTypes from "prop-types"

class Product extends Component {
    
    render() {
        const {productCreateRequest} = this.props;
        return (
            <Row>
                <ProductIn productCreateRequest={productCreateRequest}></ProductIn>
            </Row>
        )
    }
}

Product.propTypes = {
    auth: PropTypes.object.isRequired,
    productCreateRequest: PropTypes.func.isRequired
}

Product.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, {productCreateRequest}) (Product);