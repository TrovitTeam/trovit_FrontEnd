import React, { Component } from 'react';
import '../styles/index.css';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';

class Landing_page extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default Landing_page;
