import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import LogInForm from "./LogInFormRe";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { loginFacebook, login } from "../../actions/authActions";
import { connect } from "react-redux";
import glogo from "../../resources/glogo.svg";
import flogo from "../../resources/flogo.svg";

class LogIn extends Component {
  responseFacebook = response => {
    console.log(response);

    this.props.loginFacebook(response);
  };

  onSubmit = formValues => {
    this.props.login(formValues);
  };

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
        <Row style={{ margin: "0 0" }}>
          <LogInForm onSubmit={this.onSubmit} />
        </Row>
        <Row className="center" style={{ margin: "0 0 70px 0" }}>
          <Col s={6}>
            <p className="flow-text">Google</p>
            <img
              className="btn-floating btn-large waves-effect waves-light white"
              width="10%"
              alt=""
              src={glogo}
            />
          </Col>
          <Col s={6}>
            <p className="flow-text">Facebook</p>
            <FacebookLogin
              appId="287332921890045"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook}
              render={renderProps => (
                <img
                  className="btn-floating btn-large waves-effect waves-light white"
                  width="10%"
                  alt=""
                  src={flogo}
                  onClick={renderProps.onClick}
                />
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  null,
  { loginFacebook, login }
)(LogIn);
