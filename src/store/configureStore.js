import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './stores/index';

export const configure = (history, initialState = {}) => (
  createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
    )
  )
);

export default configure();
