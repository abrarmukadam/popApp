import {createStore, applyMiddleware} from 'redux';
import {reducers} from '../reducers/index';
import logger from 'redux-logger';

import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
  let middleware = [thunkMiddleware, logger];

  let store = createStore(reducers, applyMiddleware(...middleware));

  // Whenever a action is called, this functions are called.
  store.subscribe(() => {
    console.log('updated store');
    console.log(store.getState());
  });

  // dispatched, or shoots out an action
  //store.dispatch()

  return store;
}
