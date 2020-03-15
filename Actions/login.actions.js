import axios from 'axios';
import {
  FETCH_DATA,
  LOGIN_FAILED,
  USER_ID,
  LOG_OUT,
  LOGIN_SUCCESS,
  SEND_DATA,
} from './actionTypes';
import heroku_url from './heroku_url';
//const heroku_url = 'http://localhost:5000';

export function fetchData(username, password) {
  console.log('running fetch DATA');
  return dispatch => {
    dispatch({
      type: FETCH_DATA,
    });
    let affirmationList = [];
    let visionBoardList = [];
    let visionList = [];

    axios
      .post(heroku_url + '/login/', {username: username, password: password})
      .then(res => {
        console.log('FETCHING DATA FROM SERVER-', res.data[0]);
        affirmationList = res.data[0].popArray || [];
        visionBoardList = res.data[0].visionBoardArray || [];
        visionList = res.data[0].visionArray || [];

        console.log('FETCHED DATA FROM SERVER-', affirmationList);
        console.log('FETCHED DATA FROM SERVER-', visionBoardList);
        console.log('FETCHED DATA FROM SERVER-', visionList);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            affirmationList: affirmationList,
            visionBoardList: visionBoardList,
            visionList: visionList,
            username: res.data[0].username,
            password: res.data[0].password,
            id: res.data[0]._id,
          },
        });
        dispatch({
          type: USER_ID,
          payload: {loggedInUserId: res.data[0]._id},
        });
      })
      .catch(error => {
        console.log('error 404:', error);
        dispatch({
          type: LOGIN_FAILED,
          payload: {
            LoginFailedError: error,
          },
        });
      });
  };
}

export function userLogOut() {
  console.log('action called');
  return dispatch => {
    console.log('dispatch in action called');
    dispatch({
      type: LOG_OUT,
    });
    dispatch({
      type: USER_ID,
      payload: {loggedInUserId: ''},
    });
  };
}

export function dataToServer(
  userLoggedIn,
  affirmationList,
  visionBoardArray,
  visionArray,
) {
  console.log('send data to server function called');
  console.log('ID:', userLoggedIn);

  const outgoing_data = {
    popArray: affirmationList,
    visionBoardArray: visionBoardArray,
    visionArray: visionArray,
  };
  console.log('OUTGOING DATA:', outgoing_data);
  //this.updateMongoDB(userLoggedIn, outgoing_data);
  if (userLoggedIn) {
    axios
      .post(heroku_url + '/users/update/' + userLoggedIn, outgoing_data)
      .then(res => {
        //        console.log('updateMongoDB Run', res.data[0]);
        //        console.log('dadadadada', res.data[0]);
      })
      .catch(error => {
        console.log('Database Store Failed');
        console.log('error 400:', error);
      });
  }
  return dispatch => {
    dispatch({
      type: SEND_DATA,
      payload: {data: outgoing_data},
    });
  };
}
