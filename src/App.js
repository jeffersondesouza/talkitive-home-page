import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import './styles/App.css';

import { verifyAuthetication } from './utils/RouterRedirector';

import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store} >
        <Router history={browserHistory}>
          <Route path="/" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/pagina-inicial" component={WelcomePage} onEnter={verifyAuthetication}/>
          
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object
}

export default App;

/*
Requisitos:
- Criar projeto no Git;
- Fazer a tela de login/cadastro que está no zeplin;
- Usar a api para enviar os dados de cadastrar/autenticação:
     - Doc da api: https://api.dev.talkative.media/docs/
     - Endpoints que tu vai usar:
          - Login: https://api.dev.talkative.media/docs/#operation/login_email-and-password_create
          - Cadastro: https://api.dev.talkative.media/docs/#operation/signup_email-and-password_create
     - Exemplo de login: https://api.dev.talkative.media/v1/login/email-and-password/
- Adaptar a tela pra mobile;
- Contabilizar quanto tempo tu levou para fazer tudo isso.
 
Quando tu pode me entregar?
 */
