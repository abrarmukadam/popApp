import {connect} from 'react-redux';
import AffirmationDisplay from './affirmation-display.presentation';

const mapStateToProps = state => {
  return {
    affirmationList: state.affirmationReducer.affirmationList,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AffirmationDisplay);
