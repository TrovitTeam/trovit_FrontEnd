import React, { Component } from 'react';
import {Row, Card, Col, CardTitle, Table, ProgressBar, Input} from 'react-materialize'
import srcBP from "../resources/blank-profile.png"
import axios from 'axios';
import $ from 'jquery';

class Contact extends Component {
 
  constructor(props){
    super(props);
    this.state = {
        name: [],
        contacts: {
          /*0: {
            name: "ark"
          }*/
        }
    };

    
  }

  componentDidMount(){
      var _this = this;
      axios({
          method:'get',
          url:'http://localhost:3000/users',
      })
      .then((response) => {

          console.log(response);
          this.createContacts(response);
          _this.setState({
            contacts: response.data
          });
          _this.setState({
            name: response.data.message
          });
      })
      .catch(function (error) {
      console.log(error);

      });
  }
  
  createContacts = (response) => {

    let contacts = []
    
    const contactsInfo = this.state.contacts;
    console.log(this.state.contacts);

    for(let index = 0; index < contactsInfo.length; index++) {
      
      contacts.push(
        <div className="container">
          
          <Row className="valign-wrapper">
            <Col s={12} m={4}>
              <Card className="small" header={<CardTitle reveal image={srcBP} waves='light'/>}
                  title={contactsInfo[index].name }
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
                      <p className="grey-text text-darken-4">Email</p>
                      <p className="grey-text text-darken-2">{contactsInfo[index].email}</p>
                      <p><a href="/Contact">Edit</a></p>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <p className="grey-text text-darken-4">Telephone</p>
                      <p className="grey-text text-darken-2">{contactsInfo[index].phone}</p>
                      <p><a href="/Contact">Edit</a></p>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <p className="grey-text text-darken-2">{contactsInfo[index].userType}</p>
                      <p><a href="/Contact">See More</a></p>
                    </th>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <ProgressBar progress={100}/>
        </div>
      );
    }

    return contacts;
  }

  render(){

    return (
      <div>
        {this.createContacts()}
      </div>
    );
  }
}

export default Contact;
