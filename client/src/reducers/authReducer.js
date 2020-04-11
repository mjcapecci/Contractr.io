import { AUTH_STATUS, AUTH_LOADING, AUTH_ERROR } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_STATUS:
      return {
        ...state,
        isAuthenticated: action.payload,
        loading: false,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
