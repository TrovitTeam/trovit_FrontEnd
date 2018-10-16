import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
                <Link className="right" to='/Sign_in'>Sign in</Link>
                <Link className="right" to='/Log_in'>Log in</Link>
              </div>);
      }
    
    return (
      <div className="container-fluid">
        <Navbar className="blue-grey">
            <div>
            <Link to='/'>Home</Link>
            <Link to='/Contact'>Contacts</Link>
            </div>
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
                      <input type="search" required/>
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
