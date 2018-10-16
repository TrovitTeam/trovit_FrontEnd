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
      userType: '',
      phone: '',
      email: '',
      password: '',
      cPassword:'',
      confirmPassword: false
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
    }, () =>
    {
      if(name === "cPassword")
      {
        this.handlePassword();
      }
    }
    );

    /*if(name === "cPassword")
    {
      this.handlePassword();
    }*/
  }

  handlePassword = () => {

    const cPassword = this.state.cPassword;
    const password = this.state.password;

    if(cPassword !== password)
    {
      console.log(password);
      console.log(cPassword);
      this.setState({
        confirmPassword: false
      });
    }
    else
    {
      this.setState({
        confirmPassword: true
      });
    }
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
          responseType: "json",
          data: {
            "user":
            {
              "name": _this.state.name,
              "location": "Bogota",
              "userType": _this.state.userType,
              "phone": _this.state.phone,
              "email": _this.state.email,
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

      var className = this.state.confirmPassword ? "valid" : "invalid";
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
            <Input s={6} name="cPassword" type="password" className={className} label="Confirm password" value={this.state.cPassword} onChange={this.handleChange}><Icon>fingerprint</Icon></Input>
            <Input s={12} name="email" type="email" label="Email" value={this.state.email} onChange={this.handleChange} validate data-length="45"><Icon>email</Icon></Input>
            <Input s={12} name="phone" label="Telephone" validate type="number" value={this.state.phone} onChange={this.handleChange} validate data-length="45"><Icon>phone</Icon></Input>
            <Input s={6} name='userType' type='radio' value='distributor' label='Distributor' onClick={this.handleChange}/>
            <Input s={6} name='userType' type='radio' value='businessManager' label='Business Manager' onClick={this.handleChange}/>
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
