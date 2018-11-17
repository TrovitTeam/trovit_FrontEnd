import React, { Component } from 'react';
import {Row, Card, Col, CardTitle, Table, ProgressBar, Input, Dropdown, Button, NavItem, Pagination, Modal} from 'react-materialize'
import srcUP from "../resources/upload.png"
import axios from 'axios';
import Product from './Product';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {baseUrl} from "../resources/url.js";


class Product_info extends Component {
  constructor(props){
    super(props);

    const {user} = (this.props.auth);

    this.state = {
        id: user.id,
        name: [],
        products: { 
        }
    };

    console.log(this.state);


    this.createProducts = this.createProducts.bind(this);
  }

  componentDidMount(){
      var _this = this;
      //const {user} = this.props.auth;
      let userid = this.state.id;
      let id = 0;

      axios({
        method: 'GET',
        url: baseUrl + 'users/' + userid + '/user_type',
        responseType: 'json',
      })
      .then(response => {
        id = response.data["0"].id;
        axios({
          method:'GET',
          url: baseUrl + 'distributors/'+id+'/products',
        })
        .then((response) => {
            console.log(response);
            this.createProducts(response);
            this.setState({
              products: response.data
            });
            this.setState({
              name: response.data.message
            });
        })
        .catch(function (error) {
          console.log(error);
        });
      })
      
  }
  
  createProducts(response) {

    let products = []
    
    const productsInfo = this.state.products;

    for(let index = 0; index < productsInfo.length; index++) {
      
      products.push(
        <div className="container">
          
          <Row className="valign-wrapper">
            <Col s={12} m={4}>
              <Card className="small" header={<CardTitle reveal image={srcUP} waves='light'/>}
                  title={productsInfo[index].productName }
                  /* reveal={
                    <Row className="valign-wrapper">
                        <Input type="file" label="Picture" s={12} multiple placeholder="Upload one or More Pictures" />
                    </Row>
                  } */> 
              </Card>
            </Col>
            <Col s={12} m={6}>
              <Table>
                <tbody>
                  <tr>
                    <th>
                      <p className="grey-text text-darken-4">Price</p>
                      <p className="grey-text text-darken-2">{productsInfo[index].price}</p>
                      <p><a href="/Contact">Edit</a></p>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <p className="grey-text text-darken-4">Type</p>
                      <p className="grey-text text-darken-2">{productsInfo[index].producType}</p>
                      <p><a href="/Contact">Edit</a></p>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <p className="grey-text text-darken-4">Brand</p>
                      <p className="grey-text text-darken-2">{productsInfo[index].brand}</p>
                      <p><a href="/Contact">Edit</a></p>
                    </th>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <ProgressBar progress={100}/>
        </div>
      );
    }

    return products;
  }

  render(){

    return (
      <div>
        {this.createProducts()}
        <Row className="center">
          <Col s={12}>
            <Modal header='Create Product'
              trigger={<Button waves='light' >Create Product</Button>}>
              <Product/>
            </Modal>
          </Col>
        </Row>
        <div className="container center">
          <Pagination items={10} activePage={1} maxButtons={8} />
        </div>
      </div>
    );
  }
}
Product_info.propTypes = {
  auth: PropTypes.object.isRequired
}

Product_info.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state)
{
  console.log(state);
  return{
    auth: state.auth
  }
}
export default connect(mapStateToProps, {}) (Product_info);
