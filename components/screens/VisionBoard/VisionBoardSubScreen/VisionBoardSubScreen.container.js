import {connect} from 'react-redux';
import VisionBoardSubScreen from './VisionBoardSubScreen';
import {Actions} from './../../../../Actions/index';

const mapPropsToState = state => {
  return {
    visionArrayList: state.visionBoardReducer.visionArrayList || [],
    visionBoardList: state.visionBoardReducer.visionBoardList || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addVision: updatedVisionArrayList => {
      console.log('dipsatch new Add Vision');
      return dispatch(
        Actions.VisionBoardActions.addVision(updatedVisionArrayList),
      );
    },
    deleteVisionBoard: (updatedVisionBoardList, updatedVisionArrayList) => {
      console.log('dipsatch delete VisionBoard');
      return dispatch(
        Actions.VisionBoardActions.deleteVisionBoard(
          updatedVisionBoardList,
          updatedVisionArrayList,
        ),
      );
    },
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(VisionBoardSubScreen);
