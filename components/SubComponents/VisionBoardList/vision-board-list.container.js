import {connect} from 'react-redux';

import VisionBoardList from './vision-board-list.presentation';
const mapPropsToState = state => {
  return {
    //    visionArrayList: state.visionBoardReducer.visionArrayList,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapPropsToState, mapDispatchToProps)(VisionBoardList);
