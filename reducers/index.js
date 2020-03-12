import {combineReducers} from 'redux';
import affirmationReducer from './affirmation.reducer';
import loginReducer from './login.reducer';
import registerReducer from './register.reducer';

export const reducers = combineReducers({
  affirmationReducer: affirmationReducer,
  loginReducer: loginReducer,
  registerReducer: registerReducer,
});
