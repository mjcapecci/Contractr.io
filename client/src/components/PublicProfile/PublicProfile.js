import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPublicProfile } from '../../actions/userActions';

const PublicProfile = ({ user }) => {
  const publicInfo = useSelector((state) => state.user.publicProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicProfile(user));
  }, []);

  return (
    <div className='user'>
      <h1>Profile</h1>
      <h3>{user}</h3>
    </div>
  );
};

export default PublicProfile;
