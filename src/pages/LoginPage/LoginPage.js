import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Footer from '../../components/layout/Footer/Footer';
import PublicHeader from '../../components/layout/PublicHeader/PublicHeader';
import LoginForm from '../../components/forms/LoginForm/LoginForm';
import AuthMiddleware from '../../store/stores/auth/middleware';

class LoginPage extends Component {

  handleLogin = ({ email, password }) => {
    this.props.login(email, password);
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

LoginPage.propTypes = {
  store: PropTypes.object
}

const mapStateToProps = state => (
  { test: state }
);


const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(AuthMiddleware.loginRequest({ email, password })),
});

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;

/* 
joao@email.com
12345678
*/