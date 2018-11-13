import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__logo-block">
          <div className="footer__logo">Talktive</div>
          <div className="footer__copyrights">R Mobify é uma ferramenta Talktive by Wololo Tech</div>
        </div>
        <div className="footer__nav-block">
          <nav className="footer__nav">
            <a className="footer__nav-link" href="#">Enviar Feedback</a>
            <span className="bullet-separator"></span>
            <a className="footer__nav-link" href="#">Sobe Nós</a>
            <span className="bullet-separator"></span>
            <a className="footer__nav-link" href="#">Fale Conosco</a>
          </nav>
        </div>
      </footer>
    )
  }
}
