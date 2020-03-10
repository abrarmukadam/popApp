import {ADD_AFFIRMATION} from './actionTypes';

export function addAffirmation(newAffirmation) {
  let newAffirmation1 = {
    id: 10,
    popMessage: 'NEW MESSAGE',
    backColor: 'mediumturquoise',
  };

  return {
    type: ADD_AFFIRMATION,
    payload: {
      newAffirmation: newAffirmation1,
    },
  };
}
