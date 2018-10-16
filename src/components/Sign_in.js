import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col, ProgressBar} from 'react-materialize'
import Sign_in_Form from "./Sign_in_Form.js"
import {connect} from "react-redux"
import userSigninRequest from "../actions/signinActions";


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
    userSigninRequest: React.PropTypes.func.isRequired
  }
  
export default connect(null, {userSigninRequest}) (Sign_in);
