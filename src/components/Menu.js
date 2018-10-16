import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Navbar, NavItem, Row, Col} from 'react-materialize';
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
          <Row className ="valing-wrapper">
            <Col s={1}>
              <Link to='/'>Home</Link>
            </Col>
            <Col s={1}>
              <Link to='/Contact'>Contacts</Link>
            </Col>
            <Col className="center" s={2}>
              <a className="brand-logo active" id="logo-container">
                <img className="material-boxed" width="100%" height="100%" style={{padding:3 +"%"}} src={logo} alt="Trovit"/>
              </a>
            </Col>
            <Col className="offset-s1" s={5}>
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
            </Col>
            <Col s={2}>
              {j}
            </Col>
          </Row>     
        </Navbar>
      </div>
    );
  }
}

export default Menu;
