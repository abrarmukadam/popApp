const defaultState = {
  visionBoardList: [],
};
import {
  UPDATE_FETCHED_VISION_BOARD,
  ADD_VISION_BOARD,
  DELETE_VISION_BOARD,
  EDIT_VISION_BOARD,
} from '../Actions/actionTypes';

export default function visionBoardReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_FETCHED_VISION_BOARD: {
      return {
        ...state,
        visionBoardList: action.payload.visionBoardList,
        visionArrayList: action.payload.visionArrayList,
      };
    }
    case ADD_VISION_BOARD: {
      console.log('AFF REDUCER', state);
      return {
        ...state,
        visionBoardList: [
          ...state.visionBoardList,
          action.payload.newVisionBoard,
        ],
      };
    }
    case EDIT_VISION_BOARD: {
      console.log('EDD', action.payload.editedVisionBoardList);
      return {
        ...state,
        visionBoardList: action.payload.editedVisionBoardList,
      };
    }
    case DELETE_VISION_BOARD: {
      return {
        ...state,
        visionBoardList: [...action.payload.updatedVisionBoardList],
      };
    }

    default: {
      return state;
    }
  }
}
