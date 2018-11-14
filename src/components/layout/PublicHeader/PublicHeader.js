import React, { Component } from 'react';
import './public-header.css';

export default class PublicHeader extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__title-block">
          <h1 className="header__title">Sua voz será ouvida e recompensada</h1>
        </div>
        <div className="header__form-block">
          {this.props.children}
        </div>
        <div className="header__call">
          Você foi convidado a participar da mais inovadora ferramenta de mídia para micro-influenciadores nas redes
          sociais.
      </div>
      </header>
    )
  }
}
