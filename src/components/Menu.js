import React, { Component } from 'react';
import {Navbar, NavItem, Row} from 'react-materialize';
import logo from "../resources/LogoNoBack.png"

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
      <div className="container-fluid">
        <Navbar className="blue-grey">
            <NavItem href='/'>Home</NavItem>
            <NavItem href='/Contact'>Contacts</NavItem>
            {j}
          <Row className ="valing-wrapper">
            <div className="col offset-s2 center">
                  <a className="brand-logo active" id="logo-container">
                  <img className="material-boxed" width="100%" height="100%" style={{padding:3 +"%"}} src={logo} alt="Trovit"/>
                </a>
            </div>
            <div className="col s5 offset-s2">
              <nav>
                <div className="nav-wrapper grey lighten-2">
                  <form>
                    <div className="input-field">
                      <input id="search" type="search" required/>
                      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                      <i className="material-icons">close</i>
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
