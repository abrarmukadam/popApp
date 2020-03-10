import {combineReducers} from 'redux';
import affirmationReducer from './affirmation.reducer';
import loginReducer from './login.reducer';
import incrementReducer from './increment.reducer';
import registerReducer from './register.reducer';

export const reducers = combineReducers({
  affirmationReducer: affirmationReducer,
  loginReducer: loginReducer,
  incrementReducer: incrementReducer,
  registerReducer: registerReducer,
});
