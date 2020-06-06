import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Preloader from '../Layout/Preloader';
import './profile.scss';

const PersonalProfile = () => {
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  let isWorker = useSelector((state) => state.worker.currentWorker);
  return !loading ? (
    <div className='userInfo'>
      <img
        className='mx-auto d-block'
        src={user.photo}
        alt={user.name + "'s profile picture."}
        height='150px'
      />
      <hr />
      <h1 className='text-center'>{user.name}</h1>
      <hr className='bottom-line' />
      <p className='full-box'>
        <span className='bold-category'>Email:</span> {user.email}
      </p>
      <p className='full-box'>
        <span className='bold-category'>Account Type:</span>{' '}
        {!isWorker.length > 0 ? 'Help Seeker' : 'Contractor'}
      </p>
      <p className='full-box'>
        <span className='bold-category'>Member Since:</span>{' '}
        {moment(user.registrationDate).format('MMMM Do, YYYY')}
      </p>
      <p className='full-box'>
        <span className='bold-category'>Registered With:</span>{' '}
        {user.vendorName}
      </p>
      <hr />
    </div>
  ) : (
    <Preloader />
  );
};

export default PersonalProfile;
