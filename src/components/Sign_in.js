import React, { Component } from 'react';
import {Input, Row, Icon, Button} from 'react-materialize'


class Sign_in extends Component {
  render() {
    return (
      <div class="container">
        <Row>
            <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
            <Input s={6} label="Last Name" />
            <Input s={12} type="password" label="password" validate><Icon>fingerprint</Icon></Input>
            <Input s={12} type="email" label="email" validate><Icon>email</Icon></Input>
        </Row>
        <div>
            <Button waves='light'>Google<Icon left>cloud</Icon></Button>
            <Button waves='light'>Facebook<Icon left>cloud</Icon></Button>
        </div>
      </div>
    );
  }
}

export default Sign_in;
