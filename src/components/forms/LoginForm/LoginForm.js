import React, { Component } from 'react';

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

  handleLogin = (e) => {
    e.preventDefault();
    this.props.onLogin({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleLogin} className="form__header">
        <h2 className="form__header-title">Sua primeira tarefa é preencher seus dados de acesso:</h2>
        <div className="form__group">
          <input
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            className="form__input"
            type="email"
            placeholder="Digite seu emaill" />
        </div>
        <div className="form__group">
          <input
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            className="form__input"
            type="password"
            placeholder="Digite sua senha" />
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
