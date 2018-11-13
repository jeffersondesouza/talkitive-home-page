import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <form className="form__header">
        <h2 className="form__header-title">Sua primeira tarefa é preencher seus dados de acesso:</h2>
        <div className="form__group">
          <input className="form__input" type="email" placeholder="Digite seu emaill" />
        </div>
        <div className="form__group">
          <input className="form__input" type="password" placeholder="Digite sua senha" />
        </div>
        <div className="form__action">
          <button className="btn btn--facebook u-flex-grow">Entrar com Facebook</button>
          <button className="btn btn--primary">Entrar</button>
        </div>
        <div className="form__forgot-password-block">Esqueci minha senha</div>
      </form>
    )
  }
}
