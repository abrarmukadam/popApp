import {applyMiddleware, compose, createStore} from 'redux';
import {reducers} from '../reducers/index';
import logger from 'redux-logger';

import thunkMiddleware from 'redux-thunk';

import {persistStore, persistReducer} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

import {AsyncStorage} from 'react-native';
import loginReducer from '../reducers/login.reducer';

//export default function configureStore() {
let middleware = [thunkMiddleware, logger];

const persistConfig = {
  key: 'root1',
  storage: AsyncStorage,
  whitelist: ['affirmationReducer', 'visionBoardReducer'], // which reducer want to store
  //blacklist: ['loginReducer.status'],
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
