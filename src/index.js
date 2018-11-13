import React from 'react';
import ReactDOM from 'react-dom';

import './styles/abstracts/fonts.css';
import './styles/base/base.css';
import './styles/base/typography.css';
import './styles/components/form.css';

import store from './store/configureStore'

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
