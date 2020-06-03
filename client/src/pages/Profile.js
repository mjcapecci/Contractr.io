import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authLoading } from '../actions/authActions';
import PersonalProfile from '../components/Profile/PersonalProfile';
import PersonalWorker from '../components/Profile/PersonalWorker';
import PersonalSkills from '../components/Profile/PersonalSkills';
import { Helmet } from 'react-helmet';

const Profile = () => {
  const authState = useSelector((state) => state.auth);

  return authState.isAuthenticated ? (
    <>
      <Helmet>
        <title>Contractr.io | Profile</title>
      </Helmet>
      <PersonalProfile></PersonalProfile>
      <div className='extended-info'>
        <PersonalWorker></PersonalWorker>
        <PersonalSkills></PersonalSkills>
      </div>
    </>
  ) : (
    <>
      <h1>Oops!</h1>
      <h5>You must be logged in to view this page.</h5>
    </>
  );
};

export default Profile;
