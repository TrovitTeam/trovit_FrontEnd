import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col} from 'react-materialize'
import axios from 'axios';
import glogo from "../resources/glogo.svg"
import flogo from "../resources/flogo.svg"
import gmlogo from "../resources/gmail.svg"


class Sign_in extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
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
    });
  }

  /*handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }*/
  
  handleSubmit(event){
      var _this = this;
      axios({
          method:'post',
          url:'http://localhost:3000/users',
          data: {
            "user":
            {
              "name": "Arka",
              "location": "Bogota",
              "userType": "distributor",
              "phone": "123456689",
              "email": "johnd@gmail.com",
              "password": _this.state.password
            }
          }
      })
      .then(function(response) {

          console.log(response);
      })
      .catch(function (error) {
      console.log(error);

      });
  }

  render() {
    return (
      <div className="container">
        <Row>
          <blockquote>
            <h1 className="center">Sign In</h1>
          </blockquote>
        </Row>
        <Row>
            <Input s={12} name="name" label="Name" value={this.state.name} onChange={this.handleChange} validate data-length="45"><Icon>account_circle</Icon></Input>
            <Input s={6} name="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange} validate><Icon>fingerprint</Icon></Input>
            <Input s={6} type="password" label="Confirm password" validate><Icon>fingerprint</Icon></Input>
            <Input s={12} type="email" label="Email" validate data-length="45"><Icon>email</Icon></Input>
            <Input s={12} label="Telephone" validate type="number" data-length="45"><Icon>phone</Icon></Input>
            <Input s={6} name='group1' type='radio' value='distributor' label='Distributor'/>
            <Input s={6} name='group1' type='radio' value='businessManager' label='Business Manager'/>
        </Row>
        <div className="center">
          <Button className="light-blue darken-4" waves='light' onClick={this.handleSubmit}>Register</Button>
        </div>
        <div className="center">
          <Row>
            <Col s={4}>
              <p className="flow-text">Google +</p>
              <img width="10%" alt="" src={glogo}/>
            </Col>
            <Col s={4}>   
              <p className="flow-text">Facebook</p>
              <img width="10%" alt="" src={flogo}/>
            </Col>
            <Col s={4}>
              <p className="flow-text">Gmail</p>
              <img width="10%" alt="" src={gmlogo}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Sign_in;
