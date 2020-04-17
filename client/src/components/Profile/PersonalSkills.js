import React from 'react';
import { useSelector } from 'react-redux';
import PersonalSkillItems from './PersonalSkillItems';

// This component will contain the Get request for all of the worker's skills.
// It will also contain the "Add Skill" request, and prevent users from having over 5 skills.

const PersonalSkills = () => {
  const worker = useSelector((state) => state.worker);
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
        <button>
          <i class='far fa-plus-square'></i>
        </button>
        <hr />
      </div>
    )
  );
};

export default PersonalSkills;
