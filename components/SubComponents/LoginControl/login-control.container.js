import {connect} from 'react-redux';
import LoginScreen from '../../screens/Authentication/LoginScreen/LoginScreen';
//import {Actions} from '../../../Actions/index';

const mapStateToProps = state => {
  return {
    //store: state,
    // loginSuccess: state.loginReducer.loginSuccess || false,
    // loggedInUserId: state.loginReducer.loggedInUserId || '', //logged in user ID
    userLoggedIn: state.affirmationReducer.userLoggedIn || '', //currently logged In?
    // wrongPassword: state.loginReducer.wrongPassword || false,
    // LoginFailedError: state.loginReducer.LoginFailedError || '',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchData: (username, password) =>
    //   dispatch(Actions.LoginActions.fetchData(username, password)),
    // //    notifyLoginSuccess: () => dispatch({type: LOGIN_SUCCESS}),
    // userLogOut: () => {
    //   console.log('Inside container');
    //   return dispatch(Actions.LoginActions.userLogOut());
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
