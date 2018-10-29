import React, { Component } from 'react';
import {Row} from 'react-materialize'
import Sign_in_Form from "./Sign_in_Form.js"
import {connect} from "react-redux"
import {userSigninRequest} from "../actions/signinActions.js";
import PropTypes from "prop-types"



class Sign_in extends Component {
  
  
  render() {

    const {userSigninRequest} = this.props;

    return (
      <Row>
        <Sign_in_Form userSigninRequest={userSigninRequest}></Sign_in_Form>
      </Row>
    );
  }
}

Sign_in.propTypes = {
    userSigninRequest: PropTypes.func.isRequired
  }
  
export default connect(null, {userSigninRequest}) (Sign_in);
