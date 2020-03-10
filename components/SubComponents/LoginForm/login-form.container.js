import {connect} from 'react-redux';
import LoginForm from './login-form.presentation';
import {Actions} from './../../../Actions/index';

const mapPropsToState = state => {
  return {
    fetchLogin: state.loginReducer,
    loginSuccess: state.loginReducer.loginSuccess || false,
    loggedInUserId: state.loginReducer.loggedInUserId || '', //logged in user ID
    loggedInStatus: state.loginReducer.loggedInStatus || false, //currently logged In?
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => {
      console.log('dipsatch login with username & password');
      return dispatch(Actions.LoginActions.fetchData(username, password));
    },
    onLogout: () => {
      return dispatch(Actions.LoginActions.userLogOut());
    },
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(LoginForm);
