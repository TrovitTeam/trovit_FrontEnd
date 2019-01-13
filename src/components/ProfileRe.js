import React, { Component } from "react";
import {
  Row,
  Card,
  Col,
  CardTitle,
  Collection,
  CollectionItem,
  ProgressBar,
  Input,
  Button,
  Modal
} from "react-materialize";
import srcBP from "../resources/blank-profile.png";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userUpdateRequest } from "../actions/updateActions.js";
import { fetchUserInfo } from "../actions/userActions";
import Company from "./Company.js";
import ImageInUser from "./ImageInUser";
import Preloader from "react-materialize/lib/Preloader";
import Map from "./Map.js";
import { baseUrl } from "../resources/url.js";
import defaultImage from "../resources/blank-profile.png";
import "../styles/profile.css";

class ProfileRe extends Component {
  componentWillMount() {
    this.props.fetchUserInfo(this.props.match.params.id);
  }

  renderActions() {
    if (this.props.auth.user.id != this.props.match.params.id) {
      return;
    }

    return (
      <div>
        <Button>Edit Profile</Button>
      </div>
    );
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div className="container">
        <Row>
          <Col s={6}>
            <img src={defaultImage} />
            <div>{this.renderActions()}</div>
          </Col>
          <Col s={6}>
            <Collection>
              <CollectionItem>
                <div>
                  <h4>{user.name}</h4>
                </div>
              </CollectionItem>
              <CollectionItem>
                <div>
                  <h4>{user.email}</h4>
                </div>
              </CollectionItem>
              <CollectionItem>
                <div>
                  <h4>Phone: {user.phone}</h4>
                </div>
              </CollectionItem>
              <CollectionItem>
                <div>
                  <h4>
                    {user.userType === "distributor"
                      ? "Distributor"
                      : "Bussinnes Manager"}
                  </h4>
                </div>
              </CollectionItem>
              <CollectionItem>
                <div>
                  <h4>Location: {user.location}</h4>
                </div>
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { fetchUserInfo }
)(ProfileRe);
