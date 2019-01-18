import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Button } from "react-materialize";

class ProfileEditForm extends React.Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderInput = ({ input, label, meta, l }) => {
    return (
      <Input
        {...input}
        s={12}
        type={label}
        label={l}
        //error={this.renderError(meta)}
      />
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        style={{ padding: "2rem 0 0 5rem" }}>
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
  console.log(formValues);
};

export default reduxForm({ form: "profileEditForm", validate })(
  ProfileEditForm
);
