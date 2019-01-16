import React, { Component } from "react";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import { fetchUserInfo, cleanSelectedUser } from "../actions/userActions";
import Preloader from "react-materialize/lib/Preloader";
import "../styles/profile.css";
import UserInfoCard from "./UserInfoCard";

class ProfileRe extends Component {
  componentDidMount() {
    this.props.fetchUserInfo(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id == prevProps.selectedUser.id) {
      return;
    }

    this.props.fetchUserInfo(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.cleanSelectedUser();
  }

  renderActions() {
    if (this.props.auth.user.id != this.props.match.params.id) {
      return (
        <div style={{ padding: "20px" }}>
          <Button>Send Message</Button>
        </div>
      );
    }

    return (
      <div style={{ padding: "20px" }}>
        <Button>Edit Profile</Button>
      </div>
    );
  }

  render() {
    const { selectedUser } = this.props;

    return (
      <div className="container profile">
        <UserInfoCard user={selectedUser} actions={this.renderActions()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    selectedUser: state.selectedUser
  };
}

export default connect(
  mapStateToProps,
  { fetchUserInfo, cleanSelectedUser }
)(ProfileRe);
