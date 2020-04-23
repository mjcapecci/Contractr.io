import {
  MAKE_SEARCH,
  GET_SEARCH_RESULTS,
  CLEAR_SEARCH,
  SEARCH_ERROR,
  SEARCH_LOADING,
} from '../actions/types';

const initialState = {
  search: null,
  results: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MAKE_SEARCH:
      return {
        ...state,
        search: action.payload,
        loading: false,
      };
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload[1],
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
