import React, { Component } from 'react';

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

  handleSignUp = (e) => {
    e.preventDefault();
    this.props.onSignup({
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSignUp} className="form__header">
        <h2 className="form__header-title">Para validar seu convite é preciso cadastrar os seguintes dados:</h2>
        <div className="form__group">
          <input
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            className="form__input" type="email"
            placeholder="Digite seu emaill" />
        </div>
        <div className="form__group">
          <input
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            className="form__input"
            type="password"
            placeholder="Confirme Sua senha" />
        </div>
        <div className="form__group">
          <input
            value={this.state.confirmPassword}
            onChange={e => this.setState({ confirmPassword: e.target.value })}
            className="form__input"
            type="password"
            placeholder="Escolha Sua senha" />
        </div>
        <div className="form__action">
          <button type="button" className="btn btn--facebook u-flex-grow">Entrar com Facebook</button>
          <button type="submit" className="btn btn--primary">Criar Conta</button>
        </div>
      </form>
    )
  }
}
