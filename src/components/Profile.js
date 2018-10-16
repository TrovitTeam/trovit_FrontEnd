import React, { Component } from 'react';
import {Row, Card, Col, CardTitle, Table, ProgressBar} from 'react-materialize'
import srcBP from "../resources/blank-profile.png"

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <Row className="valign-wrapper">
          <Col s={12} m={6}>
            <Card header={<CardTitle reveal image={srcBP} waves='light'/>}
                title="Client Name"
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
                    <p><a href="/Profile">Edit</a></p>
                    <ProgressBar progress={100}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="flow-text">Location</p>
                    <p><a href="/Profile">Edit</a></p>
                    <ProgressBar progress={100}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="flow-text">User Type</p>
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
