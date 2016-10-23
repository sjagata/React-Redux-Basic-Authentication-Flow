import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleSignupFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  renderSignupAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { firstname, lastname, email, password, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSignupFormSubmit.bind(this))}>
        <div className="form-group">
          <label className="sr-only">First Name:</label>
          <input className="form-control" {...firstname} type="text" placeholder="First Name..."/>
          {firstname.touched && firstname.error && <div className="error">{firstname.error}</div>}
        </div>
        <div className="form-group">
            <label className="sr-only">Last Name:</label>
          <input className="form-control" {...lastname} type="text" placeholder="Last Name..."/>
          {lastname.touched && lastname.error && <div className="error">{lastname.error}</div>}
        </div>
        <div className="form-group">
          <label className="sr-only">Email:</label>
          <input className="form-control" {...email} type="text" placeholder="Email..."/>
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </div>
        <div className="form-group">
          <label className="sr-only">Password:</label>
          <input className="form-control" {...password} type="password" placeholder="Password..."/>
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </div>
        <div className="form-group">
          <label className="sr-only">Confirm Password:</label>
          <input className="form-control" {...passwordConfirm} type="password" placeholder="Confirm Password..."/>
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </div>
        {this.renderSignupAlert()}
        <button type="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.firstname) {
    errors.firstname = 'Please enter first name';
  }

  if (!formProps.lastname) {
    errors.lastname = 'Please enter last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['firstname', 'lastname', 'email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
