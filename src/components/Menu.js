import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar left>
          <NavItem href='/Landing'>Home</NavItem>
          <NavItem href='/Contacts'>Contacts</NavItem>
          <NavItem href='/Sign_in' id='left'>Sing in</NavItem>
          <NavItem href='/Log_in' id='left'>Log in</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
