import {
  UPDATE_FETCHED_AFFIRMATIONS,
  ADD_AFFIRMATION,
  EDIT_AFFIRMATION,
  DELETE_AFFIRMATION,
} from './actionTypes';

export function fetchAffirmations(affirmationList) {
  console.log('fetchAffirmation Called');

  return dispatch => {
    console.log('dispatch in action called');
    dispatch({
      type: UPDATE_FETCHED_AFFIRMATIONS,
      payload: {affirmationList: affirmationList},
    });
  };
}
export function addAffirmation(newAffirmation) {
  console.log('Add affirmation called');
  return {
    type: ADD_AFFIRMATION,
    payload: {
      newAffirmation: newAffirmation,
    },
  };
}

export function editAffirmationList(editedAffirmationList) {
  console.log('edif affirmation called');
  return {
    type: EDIT_AFFIRMATION,
    payload: {
      editedAffirmationList: editedAffirmationList,
    },
  };
}

export function deleteAffirmation(updatedAffirmationList) {
  console.log('edif affirmation called');
  return {
    type: DELETE_AFFIRMATION,
    payload: {
      updatedAffirmationList: updatedAffirmationList,
    },
  };
}
