import React, { Component } from 'react';
import { validateEmail } from '../../../utils/EmailPatterValidation';

export default class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    }
  }

  invalidEmailMsg = (validEmail) => validEmail
    ? ''
    : 'Por favor informe um email válido (Ex: meuemail@email.com)';

  requiredEmailMsg = (inputValue) => (inputValue !== null)
    ? null
    : 'Por favor, informe seu email';

  handleLogin = (e) => {
    e.preventDefault();

    if (!this.state.email) {
      this.setState({
        emailError: 'Por favor informe seu email'
      });
    }

    if (!this.state.password) {
      this.setState({
        passwordError: 'Por favor informe um password'
      });
    }

    if (!this.state.emailError && !this.state.passwordError) {
      this.props.onLogin({
        email: this.state.email,
        password: this.state.password,
        emailError: '',
        passwordError: ''
      });
    }

  }

  onChangeEmail = (e) => {
    const validEmail = validateEmail(e.target.value);

    this.setState({
      email: e.target.value,
      emailError: this.invalidEmailMsg(validEmail)
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
      passwordError: (e.target.value !== null) ? '' : 'Por favor informe um password'
    });
  }

  render() {
    return (
      <form onSubmit={this.handleLogin} className="form__header" noValidate>
        <h2 className="form__header-title">Sua primeira tarefa é preencher seus dados de acesso:</h2>
        <div className="form__group">
          <input
            value={this.state.email}
            onChange={e => this.onChangeEmail(e)}
            className="form__input"
            type="email"
            placeholder="Digite seu emaill" />
          <p className="form-error">{this.state.emailError}</p>
        </div>
        <div className="form__group">
          <input
            value={this.state.password}
            onChange={e => this.onChangePassword(e)}
            className="form__input"
            type="password"
            placeholder="Digite sua senha" />
          <p className="form-error">{this.state.passwordError}</p>
        </div>
        <div className="form__action">
          <button type="button" className="btn btn--facebook u-flex-grow">Entrar com Facebook</button>
          <button type="submit" className="btn btn--primary">Entrar</button>
        </div>
        <div className="form__forgot-password-block">Esqueci minha senha</div>
      </form>
    )
  }
}
