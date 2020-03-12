import * as AffirmationActions from './affirmation.actions';

import * as LoginActions from './login.actions';
import * as RegisterActions from './register.actions';
//const heroku_url = 'https://pop-mongo.herokuapp.com';

export const Actions = {
  AffirmationActions: {
    ...AffirmationActions,
  },
  LoginActions: {
    ...LoginActions,
  },
  RegisterActions: {
    ...RegisterActions,
  },
};
