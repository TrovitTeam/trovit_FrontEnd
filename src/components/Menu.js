import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar brand='Trovit' left>
          <NavItem href='/Landing'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
