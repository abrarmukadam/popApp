const defaultState = {
  status: {
    isLoading: false,
    isLoaded: false,
    isFailed: false,
  },
};
import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  ON_REGISTER,
} from '../Actions/actionTypes';

export default function registerReducer(state = defaultState, action) {
  switch (action.type) {
    case ON_REGISTER: {
      return {
        ...state,
        status: {
          isLoading: true,
          isLoaded: false,
          isFailed: false,
        },
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerSuccess: true,
        status: {
          isLoading: false,
          isLoaded: true,
          isFailed: false,
        },
        RegisterFailedError: action.payload.RegisterFailedError,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerSuccess: false,

        status: {
          isLoading: false,
          isLoaded: false,
          isFailed: true,
        },
        FailedError: action.payload.FailedError,
        RegisterFailedError: action.payload.RegisterFailedError,
      };
    }

    default: {
      return state;
    }
  }
}
