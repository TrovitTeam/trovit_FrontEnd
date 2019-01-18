import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Button } from "react-materialize";

class ProductForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
          return error;
        }
      }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderInput = ({ name, input, label, meta, l}) => {
    return (
      <Input
        {...input}
        s={12}
        name={name}
        type={label}
        label={l}
        error={this.renderError(meta)}
      />
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        style={{ padding: "2rem 0 0 5rem" }}>
        <Field name="productName" component={this.renderInput} label="text" l="Name" />
        <Field
          name="producType"
          component={this.renderInput}
          label="text"
          l="Type"
        />
        <Field
          name="price"
          component={this.renderInput}
          label="text"
          l="Price"
        />
        <Field
          name="brand"
          component={this.renderInput}
          label="text"
          l="Brand"
        />
        <Field
          name="quantity"
          component={this.renderInput}
          label="text"
          l="Quantity"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="text"
          l="Description"
        />
        <div className="center">
          <Button style={{ margin: "1rem" }}>Submit</Button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.productName) {
    errors.productName = "You must enter a name";
  }
  if (formValues.productName != undefined) {
    if (formValues.productName.length < 3) {
      errors.productName = "Min 3 characters";
    }
  }
  if (!formValues.producType) {
    errors.producType = "You must enter a type";
  }
  if (formValues.producType != undefined) {
    if (formValues.producType.length < 3) {
      errors.producType = "Min 3 characters";
    }
  }
  if (!formValues.price) {
    errors.price = "You must enter a price";
  }
  if (formValues.price != undefined) {
    if (formValues.price.length < 1) {
      errors.price = "Min 1 characters";
    }
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  if (formValues.description != undefined) {
    if (formValues.description.length < 25) {
      errors.description = "Min 25 characters";
    }
  }

  return errors;
};

export default reduxForm({ 
    form: "productForm", 
    validate })(ProductForm);
