import React, { Component } from 'react';
import {Input, Row, Icon, Button, Col, ProgressBar} from 'react-materialize'
import glogo from "../resources/glogo.svg"
import flogo from "../resources/flogo.svg"
import gmlogo from "../resources/gmail.svg"
import axios from 'axios';
import Log_in_Form from './Log_in_Form';


class Log_in extends Component {
  
  render() {
    return (
      <Row>
        <Log_in_Form></Log_in_Form>
      </Row>
    );
  }
}

export default Log_in;
