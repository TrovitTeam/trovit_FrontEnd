import React, { Component } from 'react';
import {Navbar, NavItem, Col} from 'react-materialize';

class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar className="indigo darken-1 center" brand="Trovit">
          <NavItem href='/Landing'>Home</NavItem>
          <NavItem href='/Contacts'>Contacts</NavItem>
          <NavItem className="right" href='/Sign_in'>Sing in</NavItem>
          <NavItem className="right" href='/Log_in'>Log in</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
