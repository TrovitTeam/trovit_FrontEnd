import React, { Component } from 'react';
import {Row, Card, Col, CardTitle, Table, ProgressBar, Input, Dropdown, Button, NavItem, Navbar, Modal} from 'react-materialize'
import srcBP from "../resources/blank-profile.png"
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {userUpdateRequest} from "../actions/updateActions.js";
import  Company from "./Company.js";
import {companySigninRequest} from "../actions/companyinActions";


class Profile extends Component {

  constructor(props) {
    super(props);
    const {user} = (this.props.auth);
    this.state = {
      id: user.id,
      name: user.name,
      userType: user.userType,
      phone: user.phone,
      email: user.email
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePicture = this.handlePicture.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    const {user} = this.props.auth;

    this.setState(
      {
        id: user.id,
        name: user.name,
        userType: user.userType,
        phone: user.phone,
        email: user.email
      }
    );

    this.setState({
      [name] : value
    });
  }

  handleSubmit(event){
    console.log(this.state);
    this.props.userUpdateRequest(this.state).then(
      (res) => this.context.router.history.replace("/Profile") 
    );
    window.location.reload();
  }

  handlePicture(event){
    const Start_url = 'http://localhost:3000/';
    const type = this.userType;
    if(type === "distributor"){
      const Act_url = Start_url + "business_managers/"
      return axios({
          method:'PUT',
          url: Act_url,
          responseType: "json",
          data: {
              "distributor":
              {
              
              }
          }
      })
    } else if (type === "businessManager"){
      const Act_url = Start_url + "business_managers/"
      return axios({
          method:'PUT',
          url: Act_url,
          responseType: "json",
          data: {
              "business_manager":
              {
              
              }
          }
      })
    } 
  }

  render() {

    const {user} = this.props.auth;
    
    console.log(this.state);

    return (
      <div className="container">
        <Row className="valign-wrapper">
          <Col s={12} m={6}>
            <Card 
              header={
                <div>
                  <CardTitle reveal image={srcBP} waves='light'/> 
                  <Input type="file" label="Picture" s={12} multiple placeholder="Upload one or More Pictures" />
                </div>
              }
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
                    
                    <Modal 
                      header='Change Email'
                      trigger={<Button className="grey lighten-2 z-depth-0 blue-text">Edit</Button>}>
                      <Row className="center">
                        <Input name="email" value={this.state.email} className="offset-s2" s={10} label="New Email"/>
                        <Button onClick={this.handleSubmit}><span>Change Email</span></Button>
                      </Row>
                      </Modal>
                    <ProgressBar progress={100}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <p className="flow-text">Telephone</p>
                    <p className="flow-text">{user.phone}</p>
                    <Modal 
                      header='Change Number'
                      trigger={<Button className="grey lighten-2 z-depth-0 blue-text">Edit</Button>}>
                      <Row className="center">
                        <Input className="offset-s2" s={10} label="New Phone" />
                        <Button><span>Change Phone</span></Button>
                      </Row>
                    </Modal>
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
                <tr>
                  <Row className="center">
                    <Col s={6}>
                      { user.userType === "businessManager" ? <Modal 
                      header='Modify Company Data'
                      trigger={<Button waves='light' >Create Company</Button>}>
                      <Company/>
                      </Modal> : null } 
                    </Col>
                    <Col s={6}>
                     { user.userType === "businessManager" ? <Button waves='light' node='a' target="_blank" href={"http://localhost:3000/companies/"+user.id+".pdf"} >Company PDF</Button> : null } 
                    </Col>
                  </Row>
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
  auth: PropTypes.object.isRequired,
  userUpdateRequest: PropTypes.func.isRequired
}

Profile.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state)
{
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps, {userUpdateRequest}) (Profile);
