import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

const PersonalProfile = () => {
  const user = useSelector((state) => state.user.user);
  let isWorker = useSelector((state) => state.worker.currentWorker);
  const dispatch = useDispatch();

  return (
    <div className='userInfo'>
      <img
        src={user.photo}
        alt={user.name + "'s profile picture."}
        height='150px'
      />
      <h1>{user.name}</h1>
      <img src='' alt='' />
      <p>Email: {user.email}</p>
      <p>Account Type: {!isWorker.length > 0 ? 'Help Seeker' : 'Contractor'}</p>
      <p>
        Member Since: {moment(user.registrationDate).format('MMMM Do, YYYY')}
      </p>
      <p>Registered With: {user.vendorName}</p>
    </div>
  );
};

export default PersonalProfile;
