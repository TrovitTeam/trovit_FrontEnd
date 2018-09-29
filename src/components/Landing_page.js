import React, { Component } from 'react';
import '../styles/index.css';
import {Button, Icon, Card, Col, Row} from 'react-materialize'

class Landing_page extends Component {
  render() {
    return (
      <div>
        <Col s={12}>
            <Card className='card_ex' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
            I am a Simple card.
            </Card>
        </Col>
      </div>
    );
  }
}

export default Landing_page;
