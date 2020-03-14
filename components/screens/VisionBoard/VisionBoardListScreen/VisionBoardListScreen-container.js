import {connect} from 'react-redux';
import VisionBoardListScreen from './VisionBoardListScreen';
import {Actions} from './../../../../Actions/index';

const mapPropsToState = state => {
  return {
    loggedInVisionBoardList: state.loginReducer.visionBoardList || [],
    loggedInVisionArrayList: state.loginReducer.visionList || [],
    visionBoardList: state.visionBoardReducer.visionBoardList || [],
    visionArrayList: state.visionBoardReducer.visionArrayList || [],
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
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(VisionBoardListScreen);
