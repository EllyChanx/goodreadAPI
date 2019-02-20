import React from 'react';
import LoginForm from './../forms/LoginForm';

class LoginPage extends React.Component {

  submit = data => {
    console.log(data);
    
  }

  render() {
    return (
      <div>
        <p> LoginPage </p>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}


export default LoginPage;