const defaultState = {
  affirmationList: [],
  visionBoardList: [],
  visionList: [],
  username: '',
  password: '',
  loginSuccess: false,
  loggedInUserId: '',
  loggedInStatus: false,
  status: {
    isLoading: false,
    isLoaded: false,
    isFailed: false,
  },
};
import {
  FETCH_DATA,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
} from '../Actions/actionTypes';

export default function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        status: {
          isLoading: true,
          isLoaded: false,
          isFailed: false,
        },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        affirmationList: action.payload.affirmationList,
        visionBoardList: action.payload.visionBoardList,
        visionList: action.payload.visionList,
        username: action.payload.username,
        password: action.payload.password,
        loginSuccess: true, //validate
        loggedInUserId: action.payload.id, //logged in user ID
        loggedInStatus: true, //currently logged In?
        status: {
          isLoading: false,
          isLoaded: true,
          isFailed: false,
        },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        LoginFailedError: action.payload.LoginFailedError,
        loginSuccess: false, //validate
        loggedInUserId: '', //logged in user ID
        loggedInStatus: false, //currently logged In?
        status: {
          isLoading: false,
          isLoaded: false,
          isFailed: true,
        },
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        loginSuccess: false, //validate
        loggedInUserId: '', //logged in user ID
        loggedInStatus: false, //currently logged In?
      };
    }
    default: {
      return state;
    }
  }
}
