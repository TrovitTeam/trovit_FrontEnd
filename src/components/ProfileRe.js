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
      <div className="container profile">
        <Row className="white" style={{ margin: "10px 0" }}>
          <Col s={4}>
            <img src={defaultImage} />
            <div>{this.renderActions()}</div>
          </Col>
          <Col s={8}>
            <ul>
              <li className="info">
                <h3>{user.name}</h3>
                <div className="divider" />
                <li className="type">
                  <h4>
                    {user.userType === "distributor"
                      ? "Distributor"
                      : "Bussinnes Manager"}
                  </h4>
                </li>
                <div>
                  <ul>
                    <li className="item header">
                      <h5>Email</h5>
                      <ul>
                        <li className="content">
                          <h5>{user.email}</h5>
                        </li>
                      </ul>
                    </li>
                    <li className="item header">
                      <h5>Telephone</h5>
                      <ul>
                        <li className="content">
                          <h5>{user.phone ? user.phone : "Not Defined"}</h5>
                        </li>
                      </ul>
                    </li>
                    <li className="item header">
                      <h5>Address</h5>
                      <ul>
                        <li className="content">
                          <h5>
                            {user.location ? user.location : "Not Defined"}
                          </h5>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
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
