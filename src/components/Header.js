import React, { Component } from 'react';
import {Icon, Input, Row} from 'react-materialize';


class Header extends Component {
  render() {
    return (
      <Row style={{margin:0}}>
        <Input type="search" required><Icon>search</Icon></Input>
      </Row>
    );
  }
}

export default Header;