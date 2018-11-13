import React, { Component } from 'react';

import Footer from '../../components/layout/Footer/Footer';
import PublicHeader from '../../components/layout/PublicHeader/PublicHeader';

export default class WelcomePage extends Component {

  handleSignUp = ({ email, password, confirmPassword }) => {
    console.log({ email, password, confirmPassword });
  }

  render() {
    return (
      <div>
        <PublicHeader>
          <h1>Bem vindo</h1>
        </PublicHeader>
        <Footer />
      </div>
    )
  }
}