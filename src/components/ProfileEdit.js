import React from "react";
import { Row, Col, Preloader, Input, Button } from "react-materialize";
import defaultImage from "../resources/blank-profile.png";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { fetchUserInfo, updateUserInfo } from "../actions/userActions";
import _ from "lodash";
import ProfileEditForm from "./ProfileEditForm";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { image: "" };
  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.match.params.id);
  }

  onSubmit = formValues => {
    if (this.state.image) {
      formValues.image = this.state.image;
    } else {
      formValues.image = defaultImage;
    }
    this.props.updateUserInfo(this.props.match.params.id, formValues);
  };

  FileReader = () => {
    const input = this.imageRef.current;

    if (input.files[0]) {
      var reader = new FileReader();
      reader.onload = this.onImageLoad;
      reader.readAsDataURL(input.files[0]);
    }
  };

  onImageLoad = e => {
    this.setState({ image: e.target.result });
  };

  render() {
    const user = this.props.selectedUser;

    if (this.props.currenUser.id != this.props.match.params.id) {
      return <div>Not Authorized</div>;
    }

    if (!user.id) {
      return (
        <div className="preloader-container">
          <Preloader className="preloader" />
        </div>
      );
    }

    return (
      <div className="container userInfoCard">
        <Row className="white">
          <Col s={4}>
            <img
              src={this.state.image ? this.state.image : defaultImage}
              alt={{ defaultImage }}
            />
            <label className="custom-file-input">
              <input
                className=""
                onChange={this.FileReader}
                type="file"
                ref={this.imageRef}
                style={{ display: "none" }}
              />
              Select Image
            </label>
          </Col>
          <Col s={6}>
            <ProfileEditForm
              onSubmit={this.onSubmit}
              initialValues={this.props.initialValues}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    initialValues: _.pick(
      state.selectedUser,
      "name",
      "phone",
      "email",
      "location"
    ),
    currenUser: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { fetchUserInfo, updateUserInfo }
)(ProfileEdit);
