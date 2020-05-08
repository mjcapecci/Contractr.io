import {
  GET_USER,
  GET_PUBLIC_PROFILE,
  LOGOUT_USER,
  USER_LOADING,
  USER_ERROR,
} from '../actions/types';

const initialState = {
  user: {},
  publicProfile: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_PUBLIC_PROFILE:
      return {
        ...state,
        publicProfile: action.payload,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
