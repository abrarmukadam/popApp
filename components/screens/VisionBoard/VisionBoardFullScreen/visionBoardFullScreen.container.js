import {connect} from 'react-redux';
import visionBoardFullScreen from './visionBoardFullScreen';
import {Actions} from './../../../../Actions/index';

const mapPropsToState = state => {
  return {
    visionArrayList: state.visionBoardReducer.visionArrayList,
    visionBoardList: state.visionBoardReducer.visionBoardList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteVision: updatedVisionArrayList => {
      return dispatch(
        Actions.VisionBoardActions.deleteVision(updatedVisionArrayList),
      );
    },
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(visionBoardFullScreen);
