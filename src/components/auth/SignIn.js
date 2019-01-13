import React, { Component } from "react";
import { Row } from "react-materialize";
import SignInForm from "./SignInForm.js";
import { connect } from "react-redux";
import { userSigninRequest } from "../../actions/signinActions.js";
import PropTypes from "prop-types";

class SignIn extends Component {
  render() {
    const { userSigninRequest } = this.props;

    return (
      <Row>
        <SignInForm userSigninRequest={userSigninRequest} />
      </Row>
    );
  }
}

SignIn.propTypes = {
  userSigninRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { userSigninRequest }
)(SignIn);
