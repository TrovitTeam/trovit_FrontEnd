import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col} from 'react-materialize'
import glogo from "../resources/glogo.svg"
import flogo from "../resources/flogo.svg"
import gmlogo from "../resources/gmail.svg"


class Sign_in extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <blockquote>
            <h1 className="center">Sign In</h1>
          </blockquote>
        </Row>
        <Row>
            <Input s={12} label="Name" validate data-length="45"><Icon>account_circle</Icon></Input>
            <Input s={12} type="password" label="password" validate><Icon>fingerprint</Icon></Input>
            <Input s={12} type="email" label="email" validate data-length="45"><Icon>email</Icon></Input>
            <Input s={12} label="Telephone" validate type="number" data-length="45"><Icon>phone</Icon></Input>
            <Input s={6} name='group1' type='radio' value='distributor' label='Distributor'/>
            <Input s={6} name='group1' type='radio' value='businessManager' label='Business Manager'/>
        </Row>
        <div className="center">
          <Button className="light-blue darken-4" waves='light'>Register</Button>
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
