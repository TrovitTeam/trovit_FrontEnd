import React, { Component } from "react";
import { Row } from "react-materialize";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CompanyForm from "./CompanyForm";
import { companySigninRequest } from "../actions/companyinActions";

class Company extends Component {
  render() {
    const { companySigninRequest } = this.props;

    return (
      <Row>
        <CompanyForm companySigninRequest={companySigninRequest} />
      </Row>
    );
  }
}

Company.propTypes = {
  companySigninRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { companySigninRequest }
)(Company);
