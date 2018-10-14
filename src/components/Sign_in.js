import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col} from 'react-materialize'
import glogo from "../resources/glogo.svg"
import flogo from "../resources/flogo.svg"
import gmlogo from "../resources/gmail.svg"


class Sign_in extends Component {
  render() {
    return (
      <div class="container">
        <Row>
          <blockquote>
            <h1 class="center">Sign In</h1>
          </blockquote>
        </Row>
        <Row>
            <Input s={12} label="Name" validate><Icon>account_circle</Icon></Input>
            <Input s={12} type="password" label="password" validate><Icon>fingerprint</Icon></Input>
            <Input s={12} type="email" label="email" validate><Icon>email</Icon></Input>
            <Input s={12} label="Telephone" validate type="tel" data-length="35"><Icon>phone</Icon></Input>
        </Row>
        <div class="center">
          <Button className="light-blue darken-4" waves='light'>Register</Button>
        </div>
        <div class="center">
          <Row>
            <Col s={4}>
              <p class="flow-text">Google +</p>
              <img width="10%" src={glogo}/>
            </Col>
            <Col s={4}>   
              <p class="flow-text">Facebook</p>
              <img width="10%" src={flogo}/>
            </Col>
            <Col s={4}>
              <p class="flow-text">Gmail</p>
              <img width="10%" src={gmlogo}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Sign_in;
