import axios from 'axios';
import {
  MAKE_SEARCH,
  GET_SEARCH_RESULTS,
  CLEAR_SEARCH,
  SEARCH_ERROR,
  SEARCH_LOADING,
} from './types';

export const makeSearch = (searchQuery) => async (dispatch) => {
  dispatch(searchLoading());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/search', searchQuery, config);
    dispatch({
      type: MAKE_SEARCH,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_ERROR,
      payload: error.response.statusText,
    });
  }
  dispatch(getSearchResults(searchQuery));
};

export const getSearchResults = (searchQuery) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/search?keyword=${searchQuery.keywordField}&location=${searchQuery.locationField}`
    );
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const clearSearch = () => (dispatch) => {
  dispatch({
    type: CLEAR_SEARCH,
  });
};

export const searchLoading = () => (dispatch) => {
  dispatch({
    type: SEARCH_LOADING,
  });
};
