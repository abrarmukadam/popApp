const defaultState = {
  affirmationList: [],
};
import {
  FETCH_AFFIRMATIONS,
  UPDATE_FETCHED_AFFIRMATIONS,
  FETCH_AFFIRMATIONS_FAILED,
  ADD_AFFIRMATION,
  DELETE_AFFIRMATION,
  EDIT_AFFIRMATION,
} from '../Actions/actionTypes';

export default function affirmationReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_AFFIRMATIONS: {
      return {
        ...state,
      };
    }
    case UPDATE_FETCHED_AFFIRMATIONS: {
      return {
        ...state,
        affirmationList: action.payload.affirmationList,
      };
    }
    case FETCH_AFFIRMATIONS_FAILED: {
      return {
        ...state,
        fetchAffirmationFailedError: action.payload.fetchAffirmationFailedError,
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
    case DELETE_AFFIRMATION: {
      return {
        ...state,
        affirmationList: [...action.payload.newAffirmationList],
      };
    }
    case EDIT_AFFIRMATION: {
      return {
        ...state,
        affirmationList: [...action.payload.newAffirmationList],
      };
    }

    default: {
      return state;
    }
  }
}
