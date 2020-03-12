import {connect} from 'react-redux';
import AffirmationListScreen from '../../screens/Affirmations/AffirmationListScreen/AffirmationListScreen';

import {Actions} from '../../../Actions/index';

const mapStateToProps = state => {
  return {
    store: state,

    loggedInAffirmationList: state.loginReducer.affirmationList || [],
    affirmationList: state.affirmationReducer.affirmationList || [],
    // store: state,
    // loginSuccess: state.loginReducer.loginSuccess || false,
    // loggedInUserId: state.loginReducer.loggedInUserId || '', //logged in user ID
    // loggedInStatus: state.loginReducer.loggedInStatus || false, //currently logged In?
    // wrongPassword: state.loginReducer.wrongPassword || false,
    // LoginFailedError: state.loginReducer.LoginFailedError || '',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAffirmations: affirmationList => {
      return dispatch(
        Actions.AffirmationActions.fetchAffirmations(affirmationList),
      );
    },
    // addAffirmation: newAffirmation =>
    //   dispatch(Actions.AddAffirmationActions.addAffirmation(newAffirmation)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AffirmationListScreen);
