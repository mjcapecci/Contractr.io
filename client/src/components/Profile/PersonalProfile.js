import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Preloader from '../Layout/Preloader';

const PersonalProfile = () => {
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  let isWorker = useSelector((state) => state.worker.currentWorker);
  return !loading ? (
    <div className='userInfo'>
      <img
        src={user.photo}
        alt={user.name + "'s profile picture."}
        height='150px'
      />
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Account Type: {!isWorker.length > 0 ? 'Help Seeker' : 'Contractor'}</p>
      <p>
        Member Since: {moment(user.registrationDate).format('MMMM Do, YYYY')}
      </p>
      <p>Registered With: {user.vendorName}</p>
      <hr />
    </div>
  ) : (
    <Preloader />
  );
};

export default PersonalProfile;
