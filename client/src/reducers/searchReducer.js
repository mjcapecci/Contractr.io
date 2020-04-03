import {
  MAKE_SEARCH,
  CLEAR_SEARCH,
  SEARCH_ERROR,
  SEARCH_LOADING
} from '../actions/types';

const initialState = {
  search: null,
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MAKE_SEARCH:
      return {
        ...state,
        search: action.payload,
        loading: false
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
