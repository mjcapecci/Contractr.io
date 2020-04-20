import axios from 'axios';
import { GET_MY_SKILLS, ADD_SKILL, SKILL_LOADING, SKILL_ERROR } from './types';

export const getMySkills = (worker) => async (dispatch) => {
  dispatch(skillLoading());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.post('/api/skills', { worker }, config);
  try {
    dispatch({
      type: GET_MY_SKILLS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SKILL_ERROR,
      payload: res.response.data,
    });
  }
};

export const addSkill = (skill) => async (dispatch) => {
  dispatch(skillLoading());
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await axios.post('/api/skills/add', { skill }, config);
  console.log(skill);
  try {
    dispatch({
      type: ADD_SKILL,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SKILL_ERROR,
      payload: res.response.data,
    });
  }
};

export const skillLoading = () => (dispatch) => {
  dispatch({
    type: SKILL_LOADING,
  });
};