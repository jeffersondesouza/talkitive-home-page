import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import './config/config-axios'

import './styles/abstracts/fonts.css';
import './styles/base/base.css';
import './styles/base/typography.css';
import './styles/components/form.css';
import './styles/components/img.css';

import store from './store/configureStore'

import App from './App';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
