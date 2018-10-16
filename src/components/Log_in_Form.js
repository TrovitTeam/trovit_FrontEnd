import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col, ProgressBar} from 'react-materialize'
import glogo from "../resources/glogo.svg"
import flogo from "../resources/flogo.svg"
import gmlogo from "../resources/gmail.svg"
import axios from 'axios';

import PropTypes from "prop-types"

import {connect} from "react-redux"
import {login} from "../actions/authActions"


class Log_in_Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
  
  handleSubmit(event){
      /*var _this = this;
      axios({
          method:'post',
          url:'http://localhost:3000/user_token',
          responseType: "json",
          data: {
            "auth":
            {
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

      });*/

      this.props.login(this.state).then(
        (res) => this.context.router.history.push("/") 
      );

  }
  
  render() {
    return (
      <div className="container">
        <Row>
          <Col className="offset-s4" s={4}>
            <blockquote>
              <h1 className="center">Log In</h1>
            </blockquote>
          </Col>
        </Row>
        <Row>
          <Col className="offset-s2" s={8}>
            <Input s={12} name="email" type="email" label="email" value={this.state.email} onChange={this.handleChange} validate data-length="45"><Icon>email</Icon></Input>
            <Input s={12} name="password" type="password" label="password" value={this.state.password} onChange={this.handleChange} validate data-length="45"><Icon>fingerprint</Icon></Input>  
          </Col>
        </Row>
        <div className="center">
          <Button id="Log_Button" className="light-blue darken-4" waves='light' onClick={this.handleSubmit}>Log In</Button>
        </div>
        <div className="center">
          <Row>
            <ProgressBar progress={100}/>
          </Row>
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

Log_in_Form.propTypes = {
  login: PropTypes.func.isRequired
}

Log_in_Form.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect (null, {login}) (Log_in_Form);
