import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col, ProgressBar} from 'react-materialize'
import glogo from "../resources/glogo.svg"
import flogo from "../resources/flogo.svg"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {login} from "../actions/authActions"
import {loginFacebook} from "../actions/authActions"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
class Sign_in_Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userType: '',
      phone: '',
      email: '',
      password: '',
      cPassword:'',
      confirmPassword: false,
      confirmPhone: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  responseFacebook = (response) => {
    console.log(response);

    this.props.loginFacebook(response).then(
      (res) => this.context.router.history.push("/") 
    );
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
  
  handleSubmit(event){

    this.props.userSigninRequest(this.state).then(
      () => {
        this.context.router.history.push("/");
      }
    );
  }

  handleDataError(data_int, number_min){
    if(data_int.length<number_min){
      return "Minimum "+number_min+" characters.";
    }
  }

  handlePhoneDataError(data_int, number_min){
    if(data_int.length<number_min){
      return "Minimum "+number_min+" characters.";
    } else {
      if(/^[0-9]{+}$/.test(data_int)===false){
        this.minLength = 45;
        return "Only Numbers Allowed";
      }       
    } 
  }

  handleClassPhoneDataError = () => {
    const data_int = this.state.phone;
    if(data_int.length<7){
      this.setState({
        confirmPhone: false
      });
    } else {
      if(/^[0-9]{+}$/.test(data_int)===false){
        this.setState({
          confirmPhone: false
        });
      } else {
        this.setState({
          confirmPhone: true
        });
      }       
    } 
  }

  render() {

      var className = this.state.confirmPassword ? "valid" : "invalid";
      var phoneClass = this.state.confirmPhone ? "valid" : "invalid";
    return (
      <div className="container">
        <Row>
          <Col className="offset-s4" s={4}>
            <blockquote>
              <h1 className="center">Sign In</h1>
            </blockquote>
          </Col>
        </Row>
        <Row>
          <Col className="offset-s2" s={8}>
            <Input s={12} name="name" label="Name" value={this.state.name} onChange={this.handleChange} validate data-length="45" minLength={3} error={this.handleDataError(this.state.name, 3)}></Input>
            <Input s={12} name="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange} validate data-length="45" minLength={8} error={this.handleDataError(this.state.password, 8)}></Input>
            <Input s={12} name="cPassword" type="password" className={className} label="Confirm password" value={this.state.cPassword} onChange={this.handleChange} data-length="45" minLength={8}></Input>
            <Input s={12} name="email" type="email" label="Email" value={this.state.email} onChange={this.handleChange} validate data-length="45" minLength={5} error={this.handleDataError(this.state.email, 5)}></Input>
            <Input s={12} name="phone" label="Telephone" className={phoneClass} value={this.state.phone} onChange={this.handleChange} validate data-length="45" minLength={7} error={this.handlePhoneDataError(this.state.phone, 7)}></Input>
            <Row id="signOptionsBoxes">
              <Col className="offset-s2 offset-m2" s={12} m={4}>
                <Input name='userType' type='radio' value='distributor' label={<span className=" flow-text black-text">Distributor</span>} onClick={this.handleChange}/>
              </Col>
              <Col s={12} m={4}>
                <Input name='userType' type='radio' value='businessManager' label={<span className="flow-text black-text">Business Manager</span>} onClick={this.handleChange}/>
              </Col> 
            </Row>
          </Col>  
        </Row>
          <div className="center">
            <Row>
              <Col className="offset-s2" s={8}>
                <Button id="Register_Button" className="light-blue darken-4" waves='light' onClick={this.handleSubmit}>Register</Button>
              </Col>
            </Row>
          </div>
        <div className="center">
          <Row>
            <ProgressBar progress={100}/>
          </Row>
          <Row>
            <Col s={12} m={6}>
              <p className="flow-text">Google</p>
              <img className="btn-floating btn-large waves-effect white" width="10%" alt="" src={glogo}/>
            </Col>
            <Col s={12} m={6}>   
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
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Sign_in_Form.propTypes = {
  userSigninRequest: PropTypes.func.isRequired,
  loginFacebook: PropTypes.func.isRequired
}

Sign_in_Form.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect (null, {login, loginFacebook}) (Sign_in_Form);
