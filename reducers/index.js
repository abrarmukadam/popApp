import {combineReducers} from 'redux';
import affirmationReducer from './affirmation.reducer';
import loginReducer from './login.reducer';
import registerReducer from './register.reducer';
import visionBoardReducer from './visionBoard.reducer';

export const reducers = combineReducers({
  affirmationReducer: affirmationReducer,
  loginReducer: loginReducer,
  registerReducer: registerReducer,
  visionBoardReducer: visionBoardReducer,
});
