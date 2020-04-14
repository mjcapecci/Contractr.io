import axios from 'axios';
import { GET_USER, USER_LOADING, USER_ERROR } from './types';

export const getProfile = () => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.get('/api/users/profile');
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};
