import React, { Component } from "react";
import { Row } from "react-materialize";
import ImageInUser from "./ImageInUser.js";
import { connect } from "react-redux";
import { imageUserCreateRequest } from "../actions/imageUserActions.js";
import PropTypes from "prop-types";

class ImageUser extends Component {
  render() {
    const { imageUserCreateRequest } = this.props;
    return (
      <Row>
        <ImageInUser imageUserCreateRequest={imageUserCreateRequest} />
      </Row>
    );
  }
}

ImageUser.propTypes = {
  auth: PropTypes.object.isRequired,
  productCreateRequest: PropTypes.func.isRequired
};

ImageUser.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(
  null,
  { imageUserCreateRequest }
)(ImageUser);
