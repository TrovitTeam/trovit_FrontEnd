import React, { Component } from 'react';
import {Navbar, NavItem, Col, Row} from 'react-materialize';


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
      <div class="container-fluid">
        <Navbar className="light-blue darken-4">
            <NavItem href='/'>Home</NavItem>
            <NavItem href='/Contacts'>Contacts</NavItem>
            {j}
          <Row>
            <div class="col s1 offset-s2">
              <h4 class="right">Trovit</h4>
            </div>
            <div class="col s5 offset-s1">
              <nav>
                <div class="nav-wrapper blue-grey">
                  <form>
                    <div class="input-field">
                      <input id="search" type="search" required/>
                      <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                      <i class="material-icons">close</i>
                    </div>
                  </form>
                </div>
              </nav>
            </div>
            
          </Row>     
        </Navbar>
      </div>
    );
  }
}

export default Menu;
