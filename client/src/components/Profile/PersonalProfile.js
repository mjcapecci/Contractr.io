import React, { useEffect } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../actions/userActions';
import { getWorker } from '../../actions/workerActions';

const PersonalProfile = () => {
  const user = useSelector((state) => state.user.user);
  let isWorker = useSelector((state) => state.worker.worker);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getWorker());
  }, []);

  return (
    <div>
      <h1>Username: {user.name}</h1>
      <img src='' alt='' />
      <p>Email: {user.email}</p>
      <p>Account Type: {!isWorker ? 'Help Seeker' : 'Contractor'}</p>
      <p>
        Member Since: {moment(user.registrationDate).format('MMMM Do, YYYY')}
      </p>
      <p>Registered With: {user.vendorName}</p>
    </div>
  );
};

export default PersonalProfile;
