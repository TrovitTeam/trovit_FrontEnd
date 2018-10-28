import React, { Component } from 'react'
import {Input, Row, Icon, Button, Col, ProgressBar, TextArea} from 'react-materialize'
import PropTypes from "prop-types"

class ProductIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          productName: '',
          producType: '',
          price: '',
          brand: '',
          quantity: '',
          description: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
            [name] : value
            }, () => {}
        );
      }
      
      handleSubmit(event){
        this.props.productCreateRequest(this.state).then(
          () => {
            this.context.router.history.push("/Product_Info");
          }
        );
      }
    
      handleDataError(data_int, number_min){
        if(data_int.length<number_min){
          return "Minimum "+number_min+" characters.";
        }
      }
    
      render() {
        return (
          <div className="container">
            <Row>
              <Col className="offset-s2" s={8}>
                <Input s={12} name="productName" label="Product Name" value={this.state.productName} onChange={this.handleChange} validate data-length="45" minLength={3} error={this.handleDataError(this.state.productName, 3)}></Input>
                <Input s={12} name="producType" label="Product Type" value={this.state.producType} onChange={this.handleChange} validate data-length="45" minLength={3} error={this.handleDataError(this.state.producType, 3)}></Input>
                <Input s={12} name="price" label="Price" value={this.state.price} onChange={this.handleChange} validate data-length="45" minLength={3} error={this.handleDataError(this.state.price, 3)}></Input>
                <Input s={12} name="quantity" label="Quantity" value={this.state.quantity} onChange={this.handleChange} validate data-length="45" minLength={1} error={this.handleDataError(this.state.price, 1)}></Input>
                <Input s={12} name="brand" label="Brand" value={this.state.brand} onChange={this.handleChange} validate data-length="45" minLength={3} error={this.handleDataError(this.state.brand, 3)}></Input>
                <Input s={12} name="description" label="Description" value={this.state.description} onChange={this.handleChange} validate minLength={3} error={this.handleDataError(this.state.description, 3)}></Input>
              </Col>  
            </Row>
              <div className="center">
                <Row>
                  <Col className="offset-s2" s={8}>
                    <Button className="light-blue darken-4" waves='light' onClick={this.handleSubmit}>Commit Product</Button>
                  </Col>
                </Row>
              </div>
          </div>
        );
      }
    }
    
    ProductIn.propTypes = {
      productCreateRequest: PropTypes.func.isRequired,
    }
    
    ProductIn.contextTypes = {
      router: PropTypes.object.isRequired
    }

export default ProductIn;