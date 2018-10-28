import React, { Component } from 'react'
import {Input, Row, Icon, Button, Col, ProgressBar, TextArea} from 'react-materialize'
import PropTypes from "prop-types"
import srcUP from "../resources/upload.png"
import axios from 'axios';

class ImageInUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: null,
          pictureType: "user",
          pictureUrl: "image_url"
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
            }, () => {}
        );
      }
      
      handleSubmit(event){
        this.props.imageUserCreateRequest(this.state).then(
          () => {
            this.context.router.history.push("/Profile");
          }
        );
        window.location.reload();
      }

      fileChangedHandler = (event) => {
        this.setState({image: event.target.files[0]})
      }
      
      uploadHandler = () => { 
        const formData = new FormData()
        formData.append(this.state.image, this.state.pictureType, this.state.pictureUrl)
        axios.post('http://localhost:3000/users/'++'/pictures', formData, {
            onUploadProgress: progressEvent => {
              console.log(progressEvent.loaded / progressEvent.total)
            }
          })
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
      productCreateRequest: PropTypes.func.isRequired,
    }
    
    ImageInUser.contextTypes = {
      router: PropTypes.object.isRequired
    }

export default ImageInUser;