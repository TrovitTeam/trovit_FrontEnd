import React, { Component } from 'react'
import {Input, Row, Icon, Button, Col, ProgressBar, Preloader} from 'react-materialize'
import PropTypes from "prop-types"
import srcUP from "../resources/upload.png"
import axios from 'axios';
import {connect} from "react-redux";
import {imageUpload} from "../actions/imageUserActions";
import $ from 'jquery';

class ImageInUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
          imageName: 'ImageUpload',
          loading: false
        };
    
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
      }
      

      fileChangedHandler = (event) => {
        this.setState({
          image: event.target.files[0],
          loading: true
        });
        function later(value) {
            return new Promise(resolve => setTimeout(resolve, value));
        }
        later(1500).then(()=>{
          this.setState({
            loading: false
          })
        });
      }
      
      uploadHandler = () => { 

        console.log(this.state.image);

        var formData = new FormData();

        formData.append('image', this.state.image);
        formData.set('imageName', this.state.imageName);

        this.props.imageUpload(formData);

      }

    
      render() {
        return (
          <div className="container">
            <br></br>
            <Row className="center">
              <Col s={12}>
                  <Input name="image" label="Select Profile Image" type="file" onChange={this.fileChangedHandler} validate></Input>
                  { this.state.loading && <Row><Preloader></Preloader></Row> }
                  <Button onClick={this.uploadHandler}>Upload</Button>
              </Col>  
            </Row>
          </div>
        );
      }
    }
    
ImageInUser.propTypes = {
  imageUpload: PropTypes.func.isRequired
}

ImageInUser.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state)
{
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps, {imageUpload}) (ImageInUser);