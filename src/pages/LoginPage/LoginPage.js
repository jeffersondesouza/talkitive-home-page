import React, { Component } from 'react';

import Footer from '../../components/layout/Footer/Footer';
import PublicHeader from '../../components/layout/PublicHeader/PublicHeader';
import LoginForm from '../../components/forms/LoginForm/LoginForm';

export default class LoginPage extends Component {


  handleLogin = ({ email, password }) => {
    console.log({ email, password });
  }

  render() {
    return (
      <div>
        <PublicHeader>
          <LoginForm onLogin={this.handleLogin} />
        </PublicHeader>
        <Footer />
      </div>
    )
  }
}