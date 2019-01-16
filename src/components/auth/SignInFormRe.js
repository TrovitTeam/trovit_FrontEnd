import React from 'react';
import { Input, Row, Button, Col} from "react-materialize";
import { reduxForm, Field } from "redux-form";

class SignInFormRe extends React.Component{
    renderError({ error, touched }) {
        if (touched && error) {
          return error;
        }
    }
    
    renderInput = ({ input, label, meta} ) => {
        let type = "";
        let name = label;
        if(!(label==="password" || label==="email" || label ==="Confirm Password") ){
            type="text"
        } else if(label === "Confirm Password"){
            type = "password",
            name = "cPassword"
        }else {
            type = label
        }
        return (
            <Input
            {...input}
            s={12}
            name={name}
            type={type}
            label={label}
            error={this.renderError(meta)}
            autocomplete="off"
            data-lenght="45"
            />
        );
    }

    renderRadioInput = ({ input, name, type, label, meta} ) => {
        return (
            <Input
            {...input}
            s={12}
            name={name}
            type={type}
            label={label}
            error={this.renderError(meta)}
            autocomplete="off"
            data-lenght="45"
            />
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Row>
                        <Col className="offset-s2" s={8}>
                        <Field name="name" component={this.renderInput} label="name" />
                        </Col>
                    </Row>
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
                        <Col className="offset-s2" s={8}>
                        <Field
                            name="cPassword"
                            component={this.renderInput}
                            label="Confirm Password"
                        />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="offset-s2" s={8}>
                        <Field
                            name="phone"
                            component={this.renderInput}
                            label="phone"
                        />
                        </Col>
                    </Row>
                    <Row className="center">
                        <Row id="signOptionsBoxes">
                            <Col className="offset-s2 offset-m2" s={12} m={4}>
                                <label>
                                    <Field
                                    name="userType"
                                    component={this.renderRadioInput}
                                    type="radio"
                                    value="businessmanager"
                                    />{' '}
                                    Business Manager
                                </label>
                            </Col>
                            <Col s={12} m={4}>
                                <label>
                                    <Field
                                    name="userType"
                                    component={this.renderRadioInput}
                                    type="radio"
                                    value="distributor"
                                    />{' '}
                                     Distributor
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <div className="center">
                                <Row>
                                    <Col className="offset-s2" s={8}>
                                    <Button
                                        id="Register_Button"
                                        className="light-blue darken-4"
                                        waves="light">
                                        Register
                                    </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Row>
                </form>
            </div>
            
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.name) {
        errors.name = "You must enter a name";
    }
    if (formValues.name!=undefined) {
        if(formValues.name.length < 3){
            errors.name = "Min 3 characters";
        }
    }
    if (!formValues.email) {
      errors.email = "You must enter an email";
    }
    if (formValues.email!=undefined) {
        if(!(formValues.email.includes("@")&&formValues.email.includes("."))){
            errors.email = "Doesn't match an email adress";
        }
    }
    if (!formValues.password) {
      errors.password = "You must enter a password";
    }
    if(formValues.password != undefined){
        if(formValues.password.length < 8){
            errors.password = "Min. 8 characters";
        }
    }
    if (!formValues.cPassword) {
        errors.password = "You must enter a password";
      }
    if(!(formValues.password === formValues.cPassword)){
        errors.cPassword = "Password Don't Match";
        errors.password = "Password Don't Match";
    }
    if(!formValues.phone){
        errors.phone = "You must enter a phone";
    }
    if (formValues.phone!=undefined) {
        if(formValues.phone.match(/[a-zA-z]/)){
            errors.phone = "Only Numbers";
        } else if(formValues.phone.length < 7){
            errors.phone = "Min. 7 characters";
        }
    }
    return errors;
};

export default reduxForm({
    form: "signinForm",
    validate
})(SignInFormRe);