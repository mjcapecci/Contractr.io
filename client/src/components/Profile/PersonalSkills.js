import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PersonalSkillItems from './PersonalSkillItems';
import { motion } from 'framer-motion';

// This component will contain the Get request for all of the worker's skills.
// It will also contain the "Add Skill" request, and prevent users from having over 5 skills.

const PersonalSkills = () => {
  const worker = useSelector((state) => state.worker);
  const [isToggled, setToggle] = useState(false);
  const sampleSkillsArr = [
    { UniqSkill: 45, Name: 'Carpentry' },
    { UniqSkill: 36, Name: 'Plumbing' },
  ];

  return (
    worker.currentWorker.length > 0 && (
      <div className='skillsInfo'>
        <h3>My Skills</h3>
        {sampleSkillsArr.map((skillData) => (
          <PersonalSkillItems data={skillData} key={skillData.UniqSkill} />
        ))}
        {isToggled ? (
          <div className='addLogic'>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, x: -5 }}
              className='addInput'
            >
              <input type='text' placeholder='Add skill...' />
              <motion.button onClick={() => setToggle(!isToggled)}>
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
  );
};

export default PersonalSkills;
