import React, { Component } from 'react'
import {Input, Row, Icon, Button, Col, ProgressBar, TextArea} from 'react-materialize'
import PropTypes from "prop-types"
import srcUP from "../resources/upload.png"
import axios from 'axios';
import {connect} from "react-redux";
import {imageUpload} from "../actions/imageUserActions";

class ImageInUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
          pictureType: "user",
          pictureUrl: "image_url"
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
        formData.append(this.state.image, this.state.pictureType, this.state.pictureUrl);
        
        console.log(this.state.pictureType);

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