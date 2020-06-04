import React, { useEffect } from 'react';
import Preloader from '../Layout/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getPublicProfile } from '../../actions/userActions';
import moment from 'moment';
import './PublicProfile.scss';

const PublicProfile = ({ user }) => {
  const info = useSelector((state) => state.user.publicProfile);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicProfile(user));
    // eslint-disable-next-line
  }, []);

  let skills = info
    ? info.skills.map((skill) => ' ' + skill.NameOf)
    : 'No Skills Entered';

  console.log(skills);

  if (!loading && info) {
    return info.profile.length !== 0 ? (
      <div className='user'>
        <h1>{info.profile[0].NameOf}</h1>
        <h3>{user}</h3>
        <img
          src={info.profile[0].Photo}
          height='70px'
          alt={'Public profile picture of ' + user}
        />
        <p>{info.profile[0].DisplayLocation}</p>
        <p>
          Member Since:{' '}
          {moment(info.profile[0].RegistrationDate).format('MMMM Do, YYYY')}
        </p>
        <p>
          <a href={'https://' + info.profile[0].WebsiteLink}>
            {info.profile[0].WebsiteLink}
          </a>
        </p>
        <p>Skills Include: {skills.toString()}</p>
        <div className='bio-box'>
          <p className='bio-text'>{info.profile[0].Bio}</p>
        </div>
      </div>
    ) : (
      <h1>That user does not exist</h1>
    );
  } else {
    return <Preloader />;
  }
};

export default PublicProfile;
