import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authLoading } from '../actions/authActions';
import PersonalProfile from '../components/Profile/PersonalProfile';
import PersonalWorker from '../components/Profile/PersonalWorker';
import PersonalSkills from '../components/Profile/PersonalSkills';

const Profile = () => {
  const authState = useSelector((state) => state.auth);

  return authState.isAuthenticated ? (
    <>
      <PersonalProfile></PersonalProfile>
      <PersonalWorker></PersonalWorker>
      <PersonalSkills></PersonalSkills>
    </>
  ) : (
    <>
      <h1>Oops!</h1>
      <h5>You must be logged in to view this page.</h5>
    </>
  );
};

export default Profile;
