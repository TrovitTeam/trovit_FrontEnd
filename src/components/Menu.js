import React, { Component } from 'react';
import {Navbar, NavItem, Col} from 'react-materialize';


class Menu extends Component {
  render() {

    let j;
    
      if(1===0)
      {
        j = <NavItem className="right" href='/Sign_in'>lololol</NavItem>;
      }
      else
      {
        j = ( <div className="right">
                <NavItem className="right" href='/Sign_in'>Sign in</NavItem>
                <NavItem className="right" href='/Log_in'>Log in</NavItem>
              </div>);
      }
    
    return (
      <div>
        <Navbar className="indigo darken-1 center" brand="Trovit">
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/Contacts'>Contacts</NavItem>
          {j}
                    
        </Navbar>
      </div>
    );
  }
}

export default Menu;
