import React, { Component } from 'react';

export default class SignupForm extends Component {
  render() {
    return (
      <form className="form__header">
        <h2 className="form__header-title">Para validar seu convite é preciso cadastrar os seguintes dados:</h2>
        <div className="form__group">
          <input className="form__input" type="email" placeholder="Digite seu emaill" />
        </div>
        <div className="form__group">
          <input className="form__input" type="password" placeholder="Escolha Sua senha" />
        </div>
        <div className="form__group">
          <input className="form__input" type="password" placeholder="Confirme Sua senha" />
        </div>
        <div className="form__action">
          <button className="btn btn--facebook u-flex-grow">Entrar com Facebook</button>
          <button className="btn btn--primary">Criar Conta</button>
        </div>
      </form>
    )
  }
}
