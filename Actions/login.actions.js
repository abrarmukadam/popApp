import axios from 'axios';
import {FETCH_DATA, LOGIN_FAILED, LOG_OUT, LOGIN_SUCCESS} from './actionTypes';
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
  };
}
