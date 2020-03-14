import {
  UPDATE_FETCHED_VISION_BOARD,
  ADD_VISION_BOARD,
  ADD_VISION,
  DELETE_VISION_BOARD,
} from './actionTypes';

export function fetchVisionBoard(visionBoardList, visionArrayList) {
  console.log('fetchVisionBoard Called');

  return dispatch => {
    console.log('dispatch in action called');
    dispatch({
      type: UPDATE_FETCHED_VISION_BOARD,
      payload: {
        visionBoardList: visionBoardList,
        visionArrayList: visionArrayList,
      },
    });
  };
}
export function addVisionBoardList(newVisionBoard) {
  console.log('addVisionBoardList Called');

  return dispatch => {
    console.log('dispatch in action called');
    dispatch({
      type: ADD_VISION_BOARD,
      payload: {newVisionBoard: newVisionBoard},
    });
  };
}

export function addVision(updatedVisionList) {
  console.log('addVision Called');

  return dispatch => {
    console.log('dispatch in action called');
    dispatch({
      type: ADD_VISION,
      payload: {updatedVisionList: updatedVisionList},
    });
  };
}

export function deleteVisionBoard(
  updatedVisionBoardList,
  updatedVisionArrayList,
) {
  console.log('deleteVisionBoard Called');

  return dispatch => {
    console.log('dispatch in action called');
    dispatch({
      type: DELETE_VISION_BOARD,
      payload: {
        updatedVisionBoardList: updatedVisionBoardList,
        updatedVisionArrayList: updatedVisionArrayList,
      },
    });
  };
}
