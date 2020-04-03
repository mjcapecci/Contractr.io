import axios from 'axios';
import {
  MAKE_SEARCH,
  CLEAR_SEARCH,
  SEARCH_ERROR,
  SEARCH_LOADING
} from './types';

export const makeSearch = searchQuery => async dispatch => {
  dispatch(searchLoading());
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/search', searchQuery, config);
    dispatch({
      type: MAKE_SEARCH,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: SEARCH_ERROR,
      payload: error.response.statusText
    });
  }
};

export const searchLoading = () => dispatch => {
  dispatch({
    type: SEARCH_LOADING
  });
};
