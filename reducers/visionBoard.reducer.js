const defaultState = {
  visionBoardList: [],
};
import {
  UPDATE_FETCHED_VISION_BOARD,
  ADD_VISION_BOARD,
  DELETE_VISION_BOARD,
  EDIT_VISION_BOARD,
  ADD_VISION,
  EDIT_VISION,
  DELETE_VISION,
} from '../Actions/actionTypes';

export default function visionBoardReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_FETCHED_VISION_BOARD: {
      return {
        ...state,
        visionBoardList: action.payload.visionBoardList,
        visionArrayList: action.payload.visionArrayList,
        //   visionArrayList: tempVisionArrayList,
      };
    }
    case ADD_VISION_BOARD: {
      return {
        ...state,
        visionBoardList: [
          ...state.visionBoardList,
          action.payload.newVisionBoard,
        ],
      };
    }
    case EDIT_VISION_BOARD: {
      return {
        ...state,
        visionBoardList: action.payload.editedVisionBoardList,
      };
    }
    case DELETE_VISION_BOARD: {
      return {
        ...state,
        visionBoardList: [...action.payload.updatedVisionBoardList],
        visionArrayList: [...action.payload.updatedVisionArrayList],
      };
    }
    case ADD_VISION: {
      return {
        ...state,
        visionArrayList: action.payload.updatedVisionList,
      };
    }

    case EDIT_VISION: {
      return {
        ...state,
        visionArrayList: action.payload.updatedVisionList,
      };
    }
    case DELETE_VISION: {
      return {
        ...state,
        visionArrayList: action.payload.updatedVisionList,
      };
    }

    default: {
      return state;
    }
  }
}
