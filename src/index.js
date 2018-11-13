import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import './styles/fonts.css';
import './styles/typography.css';
import './styles/base.css';

import App from './App';
import SignupPage from './pages/SignupPage/SignupPage';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));



serviceWorker.unregister();
