import {connect} from 'react-redux';
import AffirmationList from './affirmation-list.presentation';
import {Actions} from '../../../Actions/index';

const mapStateToProps = state => {
  return {
    affirmationList: state.affirmationReducer.affirmationList || [],
    visionBoardList: state.visionBoardReducer.visionBoardList || [],
    visionArrayList: state.visionBoardReducer.visionArrayList || [],

    userLoggedIn: state.affirmationReducer.userLoggedIn || '',
    //    fetchLogin: state.loginReducer,
    //    affirmationList: state.loginReducer.affirmationList || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AffirmationList);
