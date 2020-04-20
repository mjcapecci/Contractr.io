import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMySkills, addSkill } from '../../actions/skillActions';
import PersonalSkillItems from './PersonalSkillItems';
import { motion } from 'framer-motion';
import Preloader from '../Layout/Preloader';

const PersonalSkills = () => {
  const worker = useSelector((state) => state.worker);
  const skills = useSelector((state) => state.skill.skills);
  const dispatch = useDispatch();

  const [isToggled, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newSkill, setNewSkill] = useState('');

  const onAddSkill = () => {
    dispatch(addSkill(newSkill));
    setLoading(true);
  };

  useEffect(() => {
    if (worker.currentWorker.length > 0) {
      dispatch(getMySkills(worker.currentWorker[0].UniqWorker));
    }
  }, [worker, skills.length]);

  useEffect(() => {
    if (skills.length === 0) {
      if (worker.currentWorker.length > 0)
        dispatch(getMySkills(worker.currentWorker[0].UniqWorker));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  return !loading ? (
    worker.currentWorker.length > 0 && (
      <div className='skillsInfo'>
        <h3>My Skills</h3>
        {skills.map((skill) => (
          <PersonalSkillItems data={skill} key={skill.UniqSkill} />
        ))}
        {isToggled ? (
          <div className='addLogic'>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, x: -5 }}
              className='addInput'
            >
              <input
                type='text'
                placeholder='Add skill...'
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <motion.button
                onClick={() => {
                  setToggle(!isToggled);
                  onAddSkill();
                }}
              >
                <i className='far fa-check-circle green'></i>
              </motion.button>
              <motion.button
                onClick={() => {
                  setToggle(!isToggled);
                }}
              >
                <i className='far fa-times-circle red'></i>
              </motion.button>
            </motion.div>
          </div>
        ) : (
          <motion.button
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, x: -5 }}
            onClick={() => setToggle(!isToggled)}
          >
            <i class='far fa-plus-square'></i>
          </motion.button>
        )}
        <hr />
      </div>
    )
  ) : (
    <>
      <h3>My Skills</h3>
      <Preloader />
    </>
  );
};

export default PersonalSkills;
