import React, { Component } from 'react';

import Footer from '../../components/layout/Footer/Footer';
import PublicHeader from '../../components/layout/PublicHeader/PublicHeader';
import SignupForm from '../../components/forms/SignupForm/SignupForm';

export default class SignupPage extends Component {
  render() {
    return (
      <div>
        <PublicHeader>
          <SignupForm />
        </PublicHeader>
        <Footer />
      </div>
    )
  }
}