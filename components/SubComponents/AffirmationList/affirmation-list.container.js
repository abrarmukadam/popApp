import {connect} from 'react-redux';
import AffirmationList from './affirmation-list.presentation';
import {Actions} from '../../../Actions/index';

const mapStateToProps = state => {
  return {
    affirmationList: state.affirmationReducer.affirmationList || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAffirmations: () =>
      dispatch(Actions.AffirmationActions.fetchAffirmations()),
    addAffirmation: newAffirmation =>
      dispatch(Actions.AddAffirmationActions.addAffirmation(newAffirmation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AffirmationList);
