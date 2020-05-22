import axios from 'axios';
import {
  GET_USER,
  GET_PUBLIC_PROFILE,
  LOGOUT_USER,
  USER_LOADING,
  USER_ERROR,
} from './types';

export const getProfile = () => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.get('/api/users/profile');
    // Server-side auth middleware returns JSON that is parsed with the following code
    if (Object.values(res.data)[0] != false) {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const getPublicProfile = (username) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.get(`/api/users/public?username=${username}`);
    dispatch({
      type: GET_PUBLIC_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/logout');
    console.log(res.data);
    dispatch({
      type: LOGOUT_USER,
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
