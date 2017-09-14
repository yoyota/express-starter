import React, { Component } from 'react';
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    const isLoggedIn = false; // TODO isLoggedin check logic
    if (isLoggedIn) {
      return (
        <p>User will see this page after login</p>
      );
    } else {
      return (
        <div>
        <LoginForm/>
        </div>
      )
    }
  }
}

export default App;
