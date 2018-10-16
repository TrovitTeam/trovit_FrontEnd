import React, { Component } from 'react';
import {Row, Card, Col, CardTitle, Table, ProgressBar} from 'react-materialize'
import srcBP from "../resources/blank-profile.png"
import axios from 'axios';

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

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then(res => {
        const Name = res.name;
        const UserType = res.userType;
        const Email = res.email;
        const Phone = res.phone;
        this.setState({ 
          name: Name,
          userType: UserType,
          email: Email,
          phone: Phone
         });
      })
  }

  render() {
    return (
      <div className="container">
        <Row className="valign-wrapper">
          <Col s={12} m={6}>
            <Card header={<CardTitle reveal image={srcBP} waves='light'/>}
                title={this.state.name}
                reveal={<p>Client Description.</p>}>
                <p><a href="/Profile">Change Picture</a></p>
            </Card>
          </Col>
          <Col s={12} m={6}>
            <Table>
              <tbody>
                <tr>
                  <th>
                    <p className="flow-text">Email</p>
                    <p className="flow-text">{this.state.email}</p>
                    <p><a href="/Profile">Edit</a></p>
                    <ProgressBar progress={100}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="flow-text">Telephone</p>
                    <p className="flow-text">{this.state.phone}</p>
                    <p><a href="/Profile">Edit</a></p>
                    <ProgressBar progress={100}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="flow-text">User Type</p>
                    <p className="flow-text">{this.state.userType}</p>
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

export default Profile;
