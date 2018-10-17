import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Navbar, NavItem, Row, Col} from 'react-materialize';
import logo from "../resources/LogoNoBack.png"
import { connect } from "react-redux";

import {logout} from "../actions/authActions"

import PropTypes from "prop-types";



class Menu extends Component {

  logout(event)
  {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const {isAuthenticated} = this.props.auth;

    const userLinks = (
      <div className="right">
        <a className="right" href='#' onClick={this.logout.bind(this)}>Logout</a>
      </div>
    );

    const guestLinks = (
      <div className="right">
        <Link className="right" to='/Sign_in'>Sign un</Link>
        <Link className="right" to='/Log_in'>Login</Link>
      </div>  
    );

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
              { isAuthenticated ? userLinks : guestLinks }
            </Col>
          </Row>     
        </Navbar>
      </div>
    );
  }
}

Menu.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequiered
}

function mapStateToProps(state)
{
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps, {logout}) (Menu);
