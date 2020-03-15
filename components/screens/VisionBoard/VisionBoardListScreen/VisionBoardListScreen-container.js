import {connect} from 'react-redux';
import VisionBoardListScreen from './VisionBoardListScreen';
import {Actions} from './../../../../Actions/index';

const mapPropsToState = state => {
  return {
    loggedInVisionBoardList: state.loginReducer.visionBoardList || [],
    loggedInVisionArrayList: state.loginReducer.visionList || [],

    affirmationList: state.affirmationReducer.affirmationList || [],
    visionBoardList: state.visionBoardReducer.visionBoardList || [],
    visionArrayList: state.visionBoardReducer.visionArrayList || [],

    userLoggedIn: state.affirmationReducer.userLoggedIn || '',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVisionBoards: (visionBoardList, visionArrayList) => {
      console.log('dipsatch newAffirmatoin');
      return dispatch(
        Actions.VisionBoardActions.fetchVisionBoard(
          visionBoardList,
          visionArrayList,
        ),
      );
    },
    dataToServer: (affirmationList, visionBoardList, visionArrayList) => {
      console.log('dispatching data to server');
      return dispatch(
        Actions.LoginActions.dataToServer(
          affirmationList,
          visionBoardList,
          visionArrayList,
        ),
      );
    },
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(VisionBoardListScreen);
