import React, { Component } from 'react';

import './welcome-page.css';

import Footer from '../../components/layout/Footer/Footer';

export default class WelcomePage extends Component {

  render() {
    return (
      <div className="welcome-page">
        <header className="welcome-page__header">
          <h2 className="welcome-page__header-title">Talktive</h2>
        </header>
        <div className="welcome-page__main">
          <h2 className="welcome-page__main-title">Seja Bem Vindo</h2>
        </div>
        <Footer />
      </div>
    )
  }
}