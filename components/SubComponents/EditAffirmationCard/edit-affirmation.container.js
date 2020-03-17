import {connect} from 'react-redux';
import EditAffirmation from './edit-affirmation.presentation';

const mapPropsToState = state => {
  return {
    affirmationList: state.affirmationReducer.affirmationList || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapPropsToState, mapDispatchToProps)(EditAffirmation);
