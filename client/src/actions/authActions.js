import axios from 'axios';
import { AUTH_STATUS, AUTH_LOADING, AUTH_ERROR } from './types';

export const getStatus = () => async (dispatch) => {
  dispatch(authLoading());
  try {
    const res = await axios.get('/api/users/auth');
    dispatch({
      type: AUTH_STATUS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const authLoading = () => (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });
};
