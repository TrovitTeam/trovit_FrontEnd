import React, { Component } from 'react';
import {Footer} from 'react-materialize'


class FooterPage extends Component {
  render() {
    return (
        <Footer copyrights="&copy 2018 Copyright Text"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="/">More Links</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
              <li><a className="grey-text text-lighten-3" href="/Profile">Profile</a></li>
              <li><a className="grey-text text-lighten-3" href="/Sign_In">Sign In</a></li>
              <li><a className="grey-text text-lighten-3" href="/Log_In">Log In</a></li>
            </ul>
          }
          className="blue-grey"
        >
            <h5 className="white-text">Trovit</h5>
            <p className="grey-text text-lighten-4">Trovit Mega Page Data and Associates</p>
        </Footer>   
    );
  }
}

export default FooterPage;
