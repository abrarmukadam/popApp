import {connect} from 'react-redux';
import AddAffirmationCard from './add-affirmation-card.presentation';
import {Actions} from './../../../Actions/index';

const mapPropsToState = state => {
  return {
    affirmationList: state.affirmationReducer.affirmationList || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAffirmation: newAffirmation => {
      console.log('dipsatch newAffirmatoin');
      return dispatch(
        Actions.AffirmationActions.addAffirmation(newAffirmation),
      );
    },
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(AddAffirmationCard);
