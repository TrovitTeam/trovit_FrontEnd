import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Button } from "react-materialize";

class ProfileEditForm extends React.Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return error;
    }
  }

  renderInput = ({ input, label, meta, l }) => {
    return (
      <Input
        {...input}
        s={12}
        type={label}
        label={l}
        error={this.renderError(meta)}
      />
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="name" component={this.renderInput} label="text" l="Name" />
        <Field
          name="email"
          component={this.renderInput}
          label="email"
          l="Email"
        />
        <Field
          name="phone"
          component={this.renderInput}
          label="text"
          l="Telephone"
        />
        <Field
          name="location"
          component={this.renderInput}
          label="text"
          l="Location"
        />
        <div className="center">
          <Button style={{ margin: "1rem" }}>Save</Button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "You must enter a name";
  }
  if (formValues.name != undefined) {
    if (formValues.name.length < 3) {
      errors.name = "Min 3 characters";
    }
  }
  if (!formValues.email) {
    errors.email = "You must enter an email";
  }
  if (formValues.email != undefined) {
    if (!(formValues.email.includes("@") && formValues.email.includes("."))) {
      errors.email = "Doesn't match an email adress";
    }
  }
  if (!formValues.phone) {
    errors.phone = "You must enter a phone";
  }
  if (formValues.phone != undefined) {
    if (formValues.phone.toString().match(/[a-zA-z]/)) {
      errors.phone = "Only Numbers";
    } else if (formValues.phone.length < 7) {
      errors.phone = "Min. 7 characters";
    }
  }
  return errors;
};

export default reduxForm({ form: "profileEditForm", validate })(
  ProfileEditForm
);
