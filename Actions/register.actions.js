import axios from 'axios';
import {ON_REGISTER, REGISTER_SUCCESS, REGISTER_FAILED} from './actionTypes';
//import heroku_url from './heroku_url';
const heroku_url = 'http://localhost:5000';

export function RegisterUser(username, password) {
  console.log('running Register User');

  return dispatch => {
    dispatch({
      type: ON_REGISTER,
    });
    const userDetails = {username: username, password: password};

    axios
      .get(heroku_url + '/users/') //, userDetails)
      .then(res => {
        let filtered = res.data.find(List => {
          if (List.username.toLowerCase() == username.toLowerCase())
            return 'false';
        });
        console.log('userFilter:', filtered);
        if (!filtered) {
          console.log('userList', res.data);
          //NO SAME USER
          axios
            .post(heroku_url + '/users/add', userDetails)
            .then(res => {
              console.log('register success:', res);
              dispatch({
                type: REGISTER_SUCCESS,
                payload: {
                  //                  RegisterFailedError: res,
                  FailedError: '',
                },
              });
            })
            .catch(err => {
              console.log('register failed:', err);
              dispatch({
                type: REGISTER_FAILED,
                payload: {
                  FailedError: err,
                  RegisterFailedError: 'Register Failed!, Please retry !',
                },
              });
            });
        } else {
          dispatch({
            type: REGISTER_FAILED,
            payload: {
              RegisterFailedError: 'Email already registered !',
              FailedError: 'Error-400, Email exists',
            },
          });
        }
      })
      .catch(err => {
        console.log('Register Error', err);
        dispatch({
          type: REGISTER_FAILED,
          payload: {
            FailedError: err,
            RegisterFailedError: 'Could not connect, Check Network !',
          },
        });
      });
  };
}
