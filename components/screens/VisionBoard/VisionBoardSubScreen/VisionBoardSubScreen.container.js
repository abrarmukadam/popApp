import {connect} from 'react-redux';
import VisionBoardSubScreen from './VisionBoardSubScreen';

const mapPropsToState = state => {
  return {
    visionArrayList: state.visionBoardReducer.visionArrayList,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(VisionBoardSubScreen);
