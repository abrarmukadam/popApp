import {connect} from 'react-redux';
import AffirmationList from './affirmation-list.presentation';
//import {Actions} from '../../../Actions/index';

const mapStateToProps = state => {
  return {
    //    fetchLogin: state.loginReducer,
    //    affirmationList: state.loginReducer.affirmationList || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AffirmationList);
