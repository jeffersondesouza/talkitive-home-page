import React, { Component } from 'react';

import Footer from '../../components/layout/Footer/Footer';
import PublicHeader from '../../components/layout/PublicHeader/PublicHeader';
import LoginForm from '../../components/forms/LoginForm/LoginForm';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <PublicHeader>
          <LoginForm />
        </PublicHeader>
        <Footer />
      </div>
    )
  }
}