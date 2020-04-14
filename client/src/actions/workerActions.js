import axios from 'axios';
import {
  GET_WORKER,
  UPDATE_WORKER,
  WORKER_LOADING,
  WORKER_ERROR,
} from './types';

export const getWorker = () => async (dispatch) => {
  dispatch(workerLoading());
  try {
    const res = await axios.get('/api/workers');
    dispatch({
      type: GET_WORKER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: WORKER_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const workerLoading = () => (dispatch) => {
  dispatch({
    type: WORKER_LOADING,
  });
};
