import React, { Fragment } from 'react';
import PersonalProfile from '../components/Profile/PersonalProfile';
import PersonalWorker from '../components/Profile/PersonalWorker';

const Profile = () => {
  return (
    <>
      <PersonalProfile></PersonalProfile>
      <PersonalWorker></PersonalWorker>
    </>
  );
};

export default Profile;
