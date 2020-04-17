import React, { Fragment } from 'react';
import PersonalProfile from '../components/Profile/PersonalProfile';
import PersonalWorker from '../components/Profile/PersonalWorker';
import PersonalSkills from '../components/Profile/PersonalSkills';

const Profile = () => {
  return (
    <>
      <PersonalProfile></PersonalProfile>
      <PersonalWorker></PersonalWorker>
      <PersonalSkills></PersonalSkills>
    </>
  );
};

export default Profile;
