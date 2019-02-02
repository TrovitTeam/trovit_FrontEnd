import React from "react";
import { Input, Row, Button, Col } from "react-materialize";
import { reduxForm, Field } from "redux-form";
import "../../styles/formField.css";

class LogInForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <Input
        {...input}
        s={12}
        name={label}
        type={label}
        label={label}
        error={this.renderError(meta)}
        autoComplete="off"
        data-lenght="45"
      />
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Row>
          <Col className="offset-s2" s={8}>
            <Field name="email" component={this.renderInput} label="email" />
          </Col>
        </Row>
        <Row>
          <Col className="offset-s2" s={8}>
            <Field
              name="password"
              component={this.renderInput}
              label="password"
            />
          </Col>
        </Row>
        <Row>
          <div className="center">
            <Button
              id="Log_Button"
              className="light-blue darken-4"
              waves="light">
              Log In
            </Button>
          </div>
        </Row>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "You must enter an email";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  return errors;
};

export default reduxForm({
  form: "loginForm",
  validate
})(LogInForm);
