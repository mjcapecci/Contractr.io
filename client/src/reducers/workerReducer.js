import {
  GET_WORKER,
  ADD_WORKER,
  CHECK_WORKER_USERNAME,
  UPDATE_WORKER,
  WORKER_ERROR,
  WORKER_LOADING,
} from '../actions/types';

const initialState = {
  currentWorker: [],
  newWorkerExists: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORKER:
      return {
        ...state,
        currentWorker: action.payload,
        loading: false,
      };
    case ADD_WORKER:
      return {
        ...state,
        currentWorker: action.payload,
        loading: false,
      };
    case UPDATE_WORKER:
      return {
        ...state,
        currentWorker: action.payload,
        loading: false,
      };
    case CHECK_WORKER_USERNAME:
      return {
        ...state,
        newWorkerExists: action.payload,
        loading: false,
      };
    case WORKER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case WORKER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
