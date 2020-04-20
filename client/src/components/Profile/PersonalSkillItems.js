import React, { useState } from 'react';
import { motion } from 'framer-motion';

// This components will contain the update and delete request for particular skills

const PersonalSkillItems = ({ data }) => {
  const [isToggled, setToggle] = useState(false);
  const [skillValue, setSkillValue] = useState(data.NameOf);

  return (
    <div className={'skill' + data.UniqSkill + ' skills'}>
      {!isToggled ? (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: 0 }}>
            <p className='skillName'>{data.NameOf}</p>
          </motion.div>
          <motion.button onClick={() => setToggle(!isToggled)}>
            <i className='far fa-edit'></i>
          </motion.button>
        </>
      ) : (
        <>
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1, x: -5 }}>
            <input
              type='text'
              value={skillValue}
              placeholder='Update skill...'
              onChange={(e) => setSkillValue(e.target.value)}
            />
            <motion.button onClick={() => setToggle(!isToggled)}>
              <i className='far fa-check-circle green'></i>
            </motion.button>
            <motion.button
              onClick={() => {
                setToggle(!isToggled);
                setSkillValue(data.NameOf);
              }}
            >
              <i className='far fa-times-circle red'></i>
            </motion.button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default PersonalSkillItems;
