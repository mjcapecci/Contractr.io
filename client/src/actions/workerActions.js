import axios from 'axios';
import {
  GET_WORKER,
  ADD_WORKER,
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

export const addWorker = (newWorkerInfo) => async (dispatch) => {
  dispatch(workerLoading());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/workers', newWorkerInfo, config);
    dispatch({
      type: ADD_WORKER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: WORKER_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const updateWorker = (updatedWorkerInfo) => async (dispatch) => {
  dispatch(workerLoading());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put('/api/workers', updatedWorkerInfo, config);
    dispatch({
      type: UPDATE_WORKER,
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
