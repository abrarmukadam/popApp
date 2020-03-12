import {connect} from 'react-redux';
import RegisterForm from './register-form.presentation';
import {Actions} from './../../../Actions/index';

const mapPropsToState = state => {
  return {
    registerStatus: state.registerReducer,
    RegisterFailedError: state.registerReducer.RegisterFailedError,

    //    loginSuccess: state.loginReducer.loginSuccess || false,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (username, password) => {
      return dispatch(Actions.RegisterActions.RegisterUser(username, password));
    },
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(RegisterForm);
