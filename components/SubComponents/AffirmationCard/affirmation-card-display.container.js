import {connect} from 'react-redux';
import AffirmationCardDisplay from './affirmation-card-display.presentation';

const mapStateToProps = state => {
  return {
    affirmationList: state.affirmationReducer.affirmationList,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AffirmationCardDisplay);
