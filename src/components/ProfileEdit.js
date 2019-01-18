import React from "react";
import { Row, Col, Preloader, Input, Button } from "react-materialize";
import defaultImage from "../resources/blank-profile.png";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { fetchUserInfo, updateUserInfo } from "../actions/userActions";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { image: "" };
  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.match.params.id);
  }

  renderInput = ({ input, label, meta }) => {
    console.log(input);
    return (
      <Input
        {...input}
        value=""
        s={12}
        type={label}
        //error={this.renderError(meta)}
      />
    );
  };

  onSubmit = formValues => {
    console.log("submitted");
  };

  onChange = e => {
    console.log(e.target.value);
    this.setState({ image: e.target.value });
  };

  FileReader = () => {
    const input = this.imageRef.current;
    console.log(input.files[0]);

    var reader = new FileReader();
    reader.onload = this.onImageLoad;
    reader.readAsDataURL(input.files[0]);
  };

  onImageLoad = e => {
    console.log(e);
    this.setState({ image: e.target.result });
  };

  render() {
    const user = this.props.selectedUser;

    if (this.props.currenUser.id != this.props.match.params.id) {
      return <div>Not Authorized</div>;
    }

    if (!user.id) {
      console.log("asd");
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
          <Col s={8} />
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} />
        </Row>
      </div>
    );
  }
}

const validate = formValues => {
  console.log(formValues);
};

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
    currenUser: state.auth.user
  };
};

export default reduxForm({ form: "editProfileForm", validate })(
  connect(
    mapStateToProps,
    { fetchUserInfo, updateUserInfo }
  )(ProfileEdit)
);
