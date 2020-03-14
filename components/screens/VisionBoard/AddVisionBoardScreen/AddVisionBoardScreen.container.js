import {connect} from 'react-redux';

import AddVisionBoardScreen from './AddVisionBoardScreen';
import {Actions} from './../../../../Actions/index';

const mapPropsToState = state => {
  return {
    test: '123',
    visionBoardList: state.visionBoardReducer.visionBoardList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addVisionBoardList: newVisionBoard => {
      return dispatch(
        Actions.VisionBoardActions.addVisionBoardList(newVisionBoard),
      );
    },
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(AddVisionBoardScreen);
