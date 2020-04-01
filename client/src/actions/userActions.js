import axios from 'axios';
import { GET_USER, GET_USERS, USER_LOADING, USER_ERROR } from './types';

export const getUser = () => async dispatch => {
  dispatch(userLoading());
  try {
    const res = await axios.get('/api/test');
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.statusText
    });
  }
};

export const userLoading = () => dispatch => {
  dispatch({
    type: USER_LOADING
  });
};
