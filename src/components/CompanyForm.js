import React, { Component } from 'react';
import {Input, Row, Button, Col} from 'react-materialize'
import PropTypes from "prop-types"

class CompanyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          location: '',
          companyType: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
    
        this.setState({
          [name] : value
        }, () =>{});
      }
      
      handleSubmit(event){
        this.props.companySigninRequest(this.state).then(
          () => {
            this.context.router.history.push("/");
          }
        );
        window.location.reload();
      }
    
      handleDataError(data_int, number_min){
        if(data_int.length<number_min){
          return "Minimum "+number_min+" characters.";
        }
      }
    
      render() {
        return (
          <div className="container-fluid">
            <Row>
                <Col className="offset-s2" s={8}>
                    <Input s={12} name="name" label="Name" value={this.state.name} onChange={this.handleChange} validate data-length="45" minLength={3} error={this.handleDataError(this.state.name, 3)}></Input>
                    <Input s={12} name="location" label="Location" value={this.state.location} onChange={this.handleChange} validate data-length="45" minLength={3} error={this.handleDataError(this.state.location, 3)}></Input>
                    <Input s={12} name="companyType" label="Company Type" value={this.state.companyType} onChange={this.handleChange} validate data-length="45" minLength={3} error={this.handleDataError(this.state.companyType, 3)}></Input>
                </Col>
            </Row>
              <div className="center">
                <Row>
                  <Col className="offset-s2" s={8}>
                    <Button className="light-blue darken-4" waves='light' onClick={this.handleSubmit}>Commit Changes</Button>
                  </Col>
                </Row>
              </div>
          </div>
        );
      }
    }
    CompanyForm.propTypes = {
        companySigninRequest: PropTypes.func.isRequired,
    }
      
    CompanyForm.contextTypes = {
        router: PropTypes.object.isRequired
    }
    
    export default CompanyForm;