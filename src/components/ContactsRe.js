import React, { Component } from "react";
import { Pagination, Preloader } from "react-materialize";
import { connect } from "react-redux";
import { fetchUsersInfo, cleanUserContacts } from "../actions/userActions";
import UserInfoCard from "./UserInfoCard";

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchUsersInfo();
    //this.props.fetchUserContacts();
  }

  componentWillUnmount() {
    this.props.cleanUserContacts();
  }

  renderContacts() {
    const { contactsList } = this.props;
    if (!contactsList) {
      return <div>Loading...</div>;
    }

    return contactsList.map(contact => {
      return <UserInfoCard user={contact} actions="" />;
    });
  }

  render() {
    if (!this.props.contactsList) {
      return (
        <div className="preloader-container">
          <Preloader className="preloader" />
        </div>
      );
    }

    return (
      <div>
        <div className="container">
          <div>{this.renderContacts()}</div>
          <Pagination
            className="center"
            items={10}
            activePage={1}
            maxButtons={8}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactsList: state.contactsList
  };
};

export default connect(
  mapStateToProps,
  { fetchUsersInfo, cleanUserContacts }
)(Contacts);
