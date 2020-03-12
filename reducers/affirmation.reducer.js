const defaultState = {
  affirmationList: [],
};
import {
  UPDATE_FETCHED_AFFIRMATIONS,
  ADD_AFFIRMATION,
  DELETE_AFFIRMATION,
  EDIT_AFFIRMATION,
} from '../Actions/actionTypes';

export default function affirmationReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_FETCHED_AFFIRMATIONS: {
      return {
        ...state,
        affirmationList: action.payload.affirmationList,
      };
    }
    case ADD_AFFIRMATION: {
      console.log('AFF REDUCER', state);
      return {
        ...state,
        affirmationList: [
          ...state.affirmationList,
          action.payload.newAffirmation,
        ],
      };
    }
    case EDIT_AFFIRMATION: {
      console.log('EDD', action.payload.editedAffirmationList);
      return {
        ...state,
        affirmationList: action.payload.editedAffirmationList,
      };
    }
    case DELETE_AFFIRMATION: {
      return {
        ...state,
        affirmationList: [...action.payload.updatedAffirmationList],
      };
    }

    default: {
      return state;
    }
  }
}
