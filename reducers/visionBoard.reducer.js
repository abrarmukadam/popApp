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
let tempVisionArrayList = [
  [
    {
      id: 1,
      visionBoard: 'Amazing',
      visionMessage: 'abba',
      uri: 'https://picsum.photos/500',
    },
    {
      id: 2,
      visionBoard: 'Amazing',
      visionMessage: 'dabba',
      uri: 'https://picsum.photos/500',
    },
    {
      id: 3,
      visionBoard: 'Amazing',
      visionMessage: 'jabba',
      uri: 'https://picsum.photos/500',
    },
  ],
  [
    {
      id: 1,
      visionBoard: 'Nameste london',
      visionMessage: 'abba1',
      uri: 'https://picsum.photos/500',
    },
    {
      id: 2,
      visionBoard: 'Nameste london',
      visionMessage: 'dabba2',
      uri: 'https://picsum.photos/500',
    },
    {
      id: 3,
      visionBoard: 'Nameste london',
      visionMessage: 'jabba3',
      uri: 'https://picsum.photos/500',
    },
  ],
];

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
