import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col} from 'react-materialize'
import glogo from "../resources/glogo.svg"
import flogo from "../resources/flogo.svg"
import gmlogo from "../resources/gmail.svg"

class Log_in extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <blockquote>
            <h1 className="center">Log In</h1>
          </blockquote>
        </Row>
        <Row>
          <Input s={12} type="email" label="email" validate data-length="45"><Icon>email</Icon></Input>
          <Input s={12} type="password" label="password" validate data-length="45"><Icon>fingerprint</Icon></Input>  
        </Row>
        <div className="center">
          <Button className="light-blue darken-4" waves='light'>Log In</Button>
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

export default Log_in;
