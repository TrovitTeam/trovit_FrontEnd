import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col, ProgressBar} from 'react-materialize'
import glogo from "../resources/glogo.svg"
import flogo from "../resources/flogo.svg"
import gmlogo from "../resources/gmail.svg"

import PropTypes from "prop-types"

import {connect} from "react-redux"
import {login} from "../actions/authActions"
import {loginFacebook} from "../actions/authActions"

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

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

  responseFacebook = (response) => {
    console.log(response);

    this.props.loginFacebook(response).then(
      (res) => this.context.router.history.push("/") 
    );
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
            <Input s={12} name="email" type="email" label="email" value={this.state.email} onChange={this.handleChange} validate data-length="45"></Input>
            <Input s={12} name="password" type="password" label="password" value={this.state.password} onChange={this.handleChange} validate data-length="45"></Input>  
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
            <Col s={6}>
              <p className="flow-text">Google</p>
              <img className="btn-floating btn-large waves-effect waves-light white" width="10%" alt="" src={glogo}/>
            </Col>
            <Col s={6}> 
            <p className="flow-text">Facebook</p>  
            <FacebookLogin
              appId="287332921890045"
              autoLoad
              fields="name,email,picture"
              callback={this.responseFacebook}
              render={renderProps => (
                <img className="btn-floating btn-large waves-effect waves-light white" width="10%" alt="" src={flogo} onClick={renderProps.onClick}/>
              )}
            />
              {/* <img width="10%" alt="" src={flogo} onClick={renderProps.onClick}/> */}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Log_in_Form.propTypes = {
  login: PropTypes.func.isRequired,
  loginFacebook: PropTypes.func.isRequired
}

Log_in_Form.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect (null, {login, loginFacebook}) (Log_in_Form);
