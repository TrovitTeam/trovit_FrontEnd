import React, { Component } from "react";
import { Pagination, Preloader } from "react-materialize";
import { connect } from "react-redux";
import { fetchUsersInfo, cleanUserContacts } from "../actions/userActions";
import UserInfoCard from "./UserInfoCard";

class Contacts extends Component {
  state = { page: 1 };

  componentDidMount() {
    this.props.fetchUsersInfo();
    //this.props.fetchUserContacts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      this.props.fetchUsersInfo(this.props.match.params.id, this.state.page);
    }
  }
  componentWillUnmount() {
    this.props.cleanUserContacts();
  }

  renderContacts() {
    const { contactsList } = this.props;

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
        </div>
        <div className="container center">
          <Pagination
            onSelect={page => {
              this.setState({ page });
            }}
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
