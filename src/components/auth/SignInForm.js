import React, { Component } from "react";
import { Input, Row, Button, Col, ProgressBar, Modal } from "react-materialize";
import glogo from "../../resources/glogo.svg";
import flogo from "../../resources/flogo.svg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSigninRequest } from "../../actions/signinActions";
import { loginFacebook } from "../../actions/authActions";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import SignInFormRe from "./SignInFormRe.js";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userType: "",
      phone: "",
      email: "",
      password: "",
      cPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  responseFacebook = response => {
    response.userType = this.state.userType;

    this.props
      .loginFacebook(response)
      .then(res => this.context.router.history.push("/"));
  };

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    this.props.userSigninRequest(this.state).then(() => {
      this.context.router.history.push("/");
    });
  }

  onSubmit = formValues => {
    this.props.userSigninRequest(formValues);
  };

  render() {
    return (
      <div className="container">
        <div>
          <SignInFormRe onSubmit={this.onSubmit}/>
        </div>
        <div className="center">
          <Row>
            <ProgressBar progress={100} />
          </Row>
          <Row>
            <Col s={12} m={6}>
              <p className="flow-text">Google</p>
              <img
                className="btn-floating btn-large waves-effect white"
                width="10%"
                alt=""
                src={glogo}
              />
            </Col>
            <Col s={12} m={6}>
              <p className="flow-text">Facebook</p>
              <Modal
                header="Who are you?"
                trigger={
                  <img
                    className="btn-floating btn-large waves-effect white"
                    width="10%"
                    alt=""
                    src={flogo}
                  />
                }>
                <Row className="center">
                  <Row id="signOptionsBoxes">
                    <Col className="offset-s2 offset-m2" s={12} m={4}>
                      <Input
                        name="userType"
                        type="checkbox"
                        value="distributor"
                        label={
                          <span className=" flow-text black-text">
                            Distributor
                          </span>
                        }
                        onClick={this.handleChange}
                      />
                    </Col>
                    <Col s={12} m={4}>
                      <Input
                        name="userType"
                        type="checkbox"
                        value="businessmanager"
                        label={
                          <span className="flow-text black-text">
                            Business Manager
                          </span>
                        }
                        onClick={this.handleChange}
                      />
                    </Col>
                  </Row>  
                  <FacebookLogin
                    appId="287332921890045"
                    autoLoad
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    render={renderProps => (
                      <Button
                        width="10%"
                        alt=""
                        src={flogo}
                        onClick={renderProps.onClick}>
                        Accept
                      </Button>
                    )}
                  />
                </Row>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

SignInForm.propTypes = {
  userSigninRequest: PropTypes.func.isRequired,
  loginFacebook: PropTypes.func.isRequired
};

SignInForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(
  null,
  { userSigninRequest, loginFacebook }
)(SignInForm);
