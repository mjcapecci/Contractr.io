import {
  GET_MY_SKILLS,
  ADD_SKILL,
  DELETE_MY_SKILL,
  UPDATE_MY_SKILL,
  SKILL_LOADING,
  SKILL_ERROR,
} from '../actions/types';

const initialState = {
  skills: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MY_SKILLS:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case ADD_SKILL:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case UPDATE_MY_SKILL:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case DELETE_MY_SKILL:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case SKILL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SKILL_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
