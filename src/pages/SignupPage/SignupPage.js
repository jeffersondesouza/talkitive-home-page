import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import Footer from '../../components/layout/Footer/Footer';
import PublicHeader from '../../components/layout/PublicHeader/PublicHeader';
import SignupForm from '../../components/forms/SignupForm/SignupForm';
import AuthMiddleware from '../../store/stores/auth/middleware';

class SignupPage extends Component {

  handleSignUp = ({ email, password, confirmPassword }) => {
    this.props.signUp({ email, password, confirmPassword });
  }

  render() {
    const authState = this.context.store.getState().auth;
    return (
      <div>
        <PublicHeader>
          <SignupForm
            isSignigUp={authState.isSignigUp}
            error={authState.error}
            onSignup={this.handleSignUp} />
        </PublicHeader>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  signUp: ({ email, password, confirmPassword }) => dispatch(AuthMiddleware.signUp({ email, password, confirmPassword })),
});


SignupPage.contextTypes = {
  store: PropTypes.object.isRequired
}

const SignupPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignupPage);

export default SignupPageContainer;
