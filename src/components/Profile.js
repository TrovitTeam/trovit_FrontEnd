import React, { Component } from 'react';
import {Row, Card, Col, CardTitle, Table, ProgressBar, Input, Dropdown, Button, NavItem, Navbar} from 'react-materialize'
import srcBP from "../resources/blank-profile.png"
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from "prop-types";


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userType: '',
      phone: '',
      email: ''
    };
  }

  /*componentDidMount() {
    axios.get('http://localhost:3000/users/11')
      .then(res => {
        console.log(res)
        const Name = res.data.name;
        const UserType = res.data.userType;
        const Email = res.data.email;
        const Phone = res.data.phone;
        this.setState({ 
          name: Name,
          userType: UserType,
          email: Email,
          phone: Phone
         });
      })
  }*/

  render() {

    const {user} = this.props.auth;

    return (
      <div className="container">
        <Row className="valign-wrapper">
          <Col s={12} m={6}>
            <Card header={<CardTitle reveal image={srcBP} waves='light'/>}
                title={user.name}
                /* reveal={
                  <Row className="valign-wrapper">
                      <Input type="file" label="Picture" s={12} multiple placeholder="Upload one or More Pictures" />
                  </Row>
                } */>
                
            </Card>
          </Col>
          <Col s={12} m={6}>
            <Table>
              <tbody>
                <tr>
                  <th>
                    <p className="flow-text">Email</p>
                    <p className="flow-text">{user.email}</p>
                    <Dropdown
                    trigger={
                      <Navbar className="grey lighten-2 z-depth-0 blue-text">Edit</Navbar>
                    }>
                      <Row className="center">
                        <Input className="offset-s2" s={10} label="New Email" />
                        <Button><span>Change Email</span></Button>
                      </Row>
                    </Dropdown>
                    <ProgressBar progress={100}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="flow-text">Telephone</p>
                    <p className="flow-text">{user.phone}</p>
                    <p><a href="/Profile">Edit</a></p>
                    <ProgressBar progress={100}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="flow-text">{user.userType}</p>
                    <p><a href="/Profile">See More</a></p>
                    <ProgressBar width="100%" progress={100}/>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}


Profile.propTypes = {
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state)
{
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps, {}) (Profile);
