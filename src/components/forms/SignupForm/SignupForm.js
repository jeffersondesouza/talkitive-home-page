import React, { Component } from 'react';
import { validateEmail } from '../../../utils/EmailPatterValidation';

export default class SignupForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
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
      passwordError: (e.target.value !== null) ? '' : 'Por favor informe uma senha'
    });
  }

  onChangeConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value,
      confirmPasswordError: (e.target.value !== null) ? '' : 'Por favor confirme sua senha'
    });
  }

  handleSignUp = (e) => {
    e.preventDefault();

    if (!this.state.email) {
      this.setState({
        emailError: 'Por favor informe seu email'
      });
    }

    if (!this.state.password) {
      this.setState({
        passwordError: 'Por favor informe sua senha'
      });
    }

    if (!this.state.confirmPassword) {
      this.setState({
        confirmPasswordError: 'Por favor confirme sua senha'
      });
    }

    if (this.state.confirmPassword && this.state.password && (this.state.confirmPassword !== this.state.password)) {
      this.setState({
        confirmPasswordError: 'O valor de confirmação deve ser igual a senha informada'
      });
    }

    if (!this.state.emailError && !this.state.passwordError && !this.state.confirmPasswordError) {
      e.preventDefault();
      this.props.onSignup({
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSignUp} className="form__header">
        <h2 className="form__header-title">Para validar seu convite é preciso cadastrar os seguintes dados:</h2>
        <div className="form__group">
          <input
            value={this.state.email}
            onChange={e => this.onChangeEmail(e)}
            className="form__input" type="email"
            placeholder="Digite seu emaill" />
          <p className="form-error">{this.state.emailError}</p>
        </div>
        <div className="form__group">
          <input
            value={this.state.password}
            onChange={e => this.onChangePassword(e)}
            className="form__input"
            type="password"
            placeholder="Escolha Sua senha" />
          <p className="form-error">{this.state.passwordError}</p>
        </div>
        <div className="form__group">
          <input
            value={this.state.confirmPassword}
            onChange={e => this.onChangeConfirmPassword(e)}
            className="form__input"
            type="password"
            placeholder="Confirme Sua senha" />
          <p className="form-error">{this.state.confirmPasswordError}</p>
        </div>
        <div className="form__action">
          <button type="button" className="btn btn--facebook u-flex-grow">Entrar com Facebook</button>
          <button type="submit" className="btn btn--primary">Criar Conta</button>
        </div>
      </form>
    )
  }
}
