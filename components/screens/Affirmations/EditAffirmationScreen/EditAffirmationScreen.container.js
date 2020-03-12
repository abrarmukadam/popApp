import {connect} from 'react-redux';
import EditAffirmationScreen from './EditAffirmationScreen';

import {Actions} from './../../../../Actions/index';

const mapStateToProps = state => {
  return {
    affirmationList: state.affirmationReducer.affirmationList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditAffirmation: editedAffirmationList => {
      return dispatch(
        Actions.AffirmationActions.editAffirmationList(editedAffirmationList),
      );
    },
    deleteAffirmation: updatedAffirmationList => {
      return dispatch(
        Actions.AffirmationActions.deleteAffirmation(updatedAffirmationList),
      );
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditAffirmationScreen);
