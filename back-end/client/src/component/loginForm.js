import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Container } from 'reactstrap';

class LoginForm extends Component {
  render() {
    return (
      <Container>
        <div className="mb-3">
          <h3>Sign in</h3>
          <hr/>
        </div>
        <Form>
          <FormGroup className="row">
            <Label for="email" className="col-sm-3 text-right col-form-label">Email</Label>
            <div className="col-sm-7">
              <Input type="email" name="email" id="email" placeholder="Please Enter email"/>
            </div>
          </FormGroup>
          <FormGroup className="row">
            <Label for="password" className="col-sm-3 text-right col-form-label">password</Label>
            <div className="col-sm-7">
              <Input type="password" name="password" id="password" placeholder="Please Enter password"/>
            </div>
          </FormGroup>
          <div className="form-group">
            <div className="offset-sm-3 col-sm-7">
              <button className="btn btn-info">Log in</button>
              <a href="" className="btn btn-link">Forgot password?</a>
            </div>
          </div>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
