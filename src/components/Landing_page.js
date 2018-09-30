import React, { Component } from 'react';
import '../styles/index.css';
import Button from '@material-ui/core/Button';

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
