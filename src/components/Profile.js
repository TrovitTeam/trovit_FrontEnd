import React, { Component } from 'react';
import {Row, Card, Col, CardTitle, Table, ProgressBar, Input, Dropdown, Button, Modal} from 'react-materialize'
import srcBP from "../resources/blank-profile.png"
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {userUpdateRequest} from "../actions/updateActions.js";
import  Company from "./Company.js";
import {companySigninRequest} from "../actions/companyinActions";
import ImageUser from './ImageUser';
import ImageInUser from './ImageInUser';
import Preloader from 'react-materialize/lib/Preloader';
import Map from './Map.js';
import { stringify } from 'querystring';
import {baseUrl} from "../resources/url.js";

var UserImage;
var dataIn = '';

class Profile extends Component {

  constructor(props) {
    super(props);
    const {user} = (this.props.auth);
    this.state = {
      id: user.id,
      name: user.name,
      userType: user.userType,
      phone: user.phone,
      email: user.email,
      location: user.location,
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){

    const {user} = this.props.auth;
    let type = '';
    console.log('this.props.auth');
    console.log(this.props.auth);

    if(user.userType === 'distributor')
    {
        type = 'distributors';
    }
    else
    {
        type = 'business_managers';
    }

    let id = 0;

    axios({
      method: 'GET',
      url: baseUrl+'/users/' + user.id + '/user_type',
      responseType: 'json',
    }).then(response => {
        console.log('response');
        console.log(response);
        id = response.data["0"].id;
        axios({
          method: 'GET',
          url: baseUrl+ type +'/' + id + '/pictures',
          responseType: 'json',
        })
        .then(response => {
            dataIn = response.data[0].image.url;
            console.log('dataIn');
            console.log(dataIn);
            axios({
              method: 'GET',
              url: baseUrl+dataIn,
              responseType: 'arraybuffer',
            })
            .then(response => {
              let image = btoa(
                new Uint8Array(response.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
              UserImage = `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
                this.forceUpdate();
            });    
            this.forceUpdate();
        });
        this.forceUpdate();
    });
    
    
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
        email: user.email,
        location: user.location
      }
    );

    this.setState({
      [name] : value
    });
  }

  handleSubmit(event){
    this.setState({
      loading: true
    });
    console.log(this.state);
    this.props.userUpdateRequest(this.state).then(
      (res) => this.context.router.history.replace("/Profile")      
    );
    function later(value) {
      return new Promise(resolve => setTimeout(resolve, value));
    }
    later(1500).then(()=>{
      this.setState({
        loading: false
      })
      window.location.reload()
    });
  };

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
                  <CardTitle reveal image={UserImage} waves='light'/> 
                  <ImageInUser />
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
                        <Input name="email" value={this.state.email} onChange={this.handleChange} className="offset-s2" s={10} label="New Email"/>
                        { this.state.loading && <Row><Preloader></Preloader></Row> }
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
                        <Input name="phone"  value={this.state.phone} onChange={this.handleChange} className="offset-s2" s={10} label="New Phone" />
                        { this.state.loading && <Row><Preloader></Preloader></Row> }
                        <Button onClick={this.handleSubmit}><span>Change Phone</span></Button>
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
                     { user.userType === "businessManager" ? <Button waves='light' node='a' target="_blank" href={baseUrl+"/companies/"+user.id+".pdf"} >Company PDF</Button> : null } 
                    </Col>
                  </Row>
                </tr>
                <tr>
                  <th>
                    <p className="flow-text">Location</p>
                    <p className="flow-text">{user.location}</p>
                    <Row  className="center">
                        <Col s={12} m={6}>
                          <Modal 
                          header='Change Location'
                          trigger={<Button className="grey lighten-2 z-depth-0 blue-text">Edit</Button>}>
                            <Row className="center">
                              <Input name="location" value={this.state.location} className="offset-s2" s={10} label="New Location"/>
                              <Button onClick={this.handleSubmit}><span>Change Location</span></Button>
                            </Row>
                          </Modal>
                        </Col>
                        <Col s={12} m={6}>
                          <Modal 
                          header='Current Location'
                          trigger={<Button className="grey lighten-2 z-depth-0 blue-text">View Current Location</Button>}>
                            <Row>
                              <Map  
                              containerElement={
                                <div style={{ height: '40vh' }} />
                            }
                            mapElement={
                                <div style={{ height: '100%' }} />
                            }/>
                            </Row>
                          </Modal>
                        </Col>
                    <ProgressBar progress={100}/>
                    </Row>
                      
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
