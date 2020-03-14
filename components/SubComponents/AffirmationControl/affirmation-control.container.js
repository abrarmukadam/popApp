import {connect} from 'react-redux';
import AffirmationListScreen from '../../screens/Affirmations/AffirmationListScreen/AffirmationListScreen';

import {Actions} from '../../../Actions/index';

const mapStateToProps = state => {
  return {
    //    store: state,

    loggedInAffirmationList: state.loginReducer.affirmationList || [],
    affirmationList: state.affirmationReducer.affirmationList || [],

    loggedInVisionBoardList: state.loginReducer.visionBoardList || [],
    visionBoardList: state.visionBoardReducer.visionBoardList || [],

    loggedInVisionArrayList: state.loginReducer.visionList || [],
    visionArrayList: state.visionBoardReducer.visionArrayList || [],
    // store: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAffirmations: affirmationList => {
      return dispatch(
        Actions.AffirmationActions.fetchAffirmations(affirmationList),
      );
    },
    fetchVisionBoards: (visionBoardList, visionArrayList) => {
      return dispatch(
        Actions.VisionBoardActions.fetchVisionBoard(
          visionBoardList,
          visionArrayList,
        ),
      );
    },
    // addAffirmation: newAffirmation =>
    //   dispatch(Actions.AddAffirmationActions.addAffirmation(newAffirmation)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AffirmationListScreen);
