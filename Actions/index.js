//import * as AffirmationActions from './fetch-affirmations.actions';
import * as AddAffirmationActions from './add-affirmations.actions';
import * as LoginActions from './login.actions';
import * as RegisterActions from './register.actions';
//const heroku_url = 'https://pop-mongo.herokuapp.com';

export const Actions = {
  // AffirmationActions: {
  //   ...AffirmationActions,
  // },
  AddAffirmationActions: {
    ...AddAffirmationActions,
  },
  LoginActions: {
    ...LoginActions,
  },
  RegisterActions: {
    ...RegisterActions,
  },
};
