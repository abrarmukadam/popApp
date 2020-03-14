import {connect} from 'react-redux';

import VisionBoardList from './vision-board-list.presentation';
const mapPropsToState = state => {
  return {
    affirmationList: state.affirmationReducer.affirmationList,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapPropsToState, mapDispatchToProps)(VisionBoardList);
