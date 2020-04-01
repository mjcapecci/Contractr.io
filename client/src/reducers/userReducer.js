import {
  GET_USER,
  GET_USERS,
  USER_LOADING,
  USER_ERROR
} from '../actions/types';

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
