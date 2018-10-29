import React, { Component } from 'react'
import {Input, Row, Icon, Button, Col, ProgressBar, TextArea} from 'react-materialize'
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
          pictureType: 'jpeg',
          pictureUrl: 'urlnotafakeokjustalittle'
        };
    
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
      }

      fileChangedHandler = (event) => {
        this.setState({
          image: event.target.files[0]
        });

        
      }
      
      uploadHandler = () => { 

        console.log(this.state.image);

        let formData = new FormData();

        formData.append('image', this.state.image);
        formData.append('pictureType', this.state.pictureType);
        formData.append('pictureUrl', this.state.pictureUrl);

        this.props.imageUpload(formData);

      }
    
      render() {
        return (
          <div className="container">
            <Row>
              <Col className="offset-s2" s={8}>
                  <input s={12} name="image" label="Select your Profile Image" type="file" onChange={this.fileChangedHandler} validate></input>
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