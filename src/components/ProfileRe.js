import React, { Component } from "react";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import { fetchUserInfo } from "../actions/userActions";
import Preloader from "react-materialize/lib/Preloader";
import "../styles/profile.css";
import UserInfoCard from "./UserInfoCard";

class ProfileRe extends Component {
  componentWillMount() {
    this.props.fetchUserInfo(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.selectedUser);
    if (this.props.selectedUser === prevProps.selectedUser) {
      return;
    }

    this.props.fetchUserInfo(this.props.match.params.id);
  }

  renderActions() {
    if (this.props.auth.user.id != this.props.match.params.id) {
      return (
        <div>
          <Button style={{ margin: "2px" }}>Send Message</Button>
        </div>
      );
    }

    return (
      <div>
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
  { fetchUserInfo }
)(ProfileRe);
