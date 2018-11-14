import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../../components/layout/Footer/Footer';
import PublicHeader from '../../components/layout/PublicHeader/PublicHeader';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import AuthMiddleware from '../../store/stores/auth/middleware';

class LoginPage extends Component {

  handleLogin = ({ email, password }) => {
    this.props.login(email, password);
  }

  render() {
    const authState = this.context.store.getState().auth;
    return (
      <div>
        <PublicHeader>
          <LoginForm
            isSignigUp={authState.isSignigUp}
            error={authState.error}
            onLogin={this.handleLogin} />
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
  login: (email, password) => dispatch(AuthMiddleware.loginRequest({ email, password })),
});

LoginPage.contextTypes = {
  store: PropTypes.object.isRequired
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);


export default LoginPageContainer;

