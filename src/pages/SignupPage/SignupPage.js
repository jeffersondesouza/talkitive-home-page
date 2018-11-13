import React, { Component } from 'react';

import Footer from '../../components/layout/Footer/Footer';
import PublicHeader from '../../components/layout/PublicHeader/PublicHeader';
import SignupForm from '../../components/forms/SignupForm/SignupForm';

export default class SignupPage extends Component {

  handleSignUp = ({ email, password, confirmPassword }) => {
    console.log({ email, password, confirmPassword });
  }

  render() {
    return (
      <div>
        <PublicHeader>
          <SignupForm onSignup={this.handleSignUp} />
        </PublicHeader>
        <Footer />
      </div>
    )
  }
}