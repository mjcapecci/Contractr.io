import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWorker, checkWorkerUsername } from '../../actions/workerActions';
import RegistrationModal from './RegistrationModal';
import './profile.scss';

const PersonalWorker = () => {
  const worker = useSelector((state) => state.worker);
  const newWorkerExists = useSelector((state) => state.worker.newWorkerExists);

  const dispatch = useDispatch();
  const [isToggled, setToggle] = useState(false);

  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [displayLocation, setDisplayLocation] = useState('');

  const formControls = {
    setUsername,
    setBio,
    setContactEmail,
    setWebsite,
    setLocation,
    setDisplayLocation,
  };

  const changeInfo = {
    username,
    bio,
    contactEmail,
    website,
    location,
    displayLocation,
  };

  const loadEditInfo = () => {
    setUsername(worker.currentWorker[0].Username);
    setBio(worker.currentWorker[0].Bio);
    setContactEmail(worker.currentWorker[0].ContactEmail);
    setWebsite(worker.currentWorker[0].WebsiteLink);
    setLocation(worker.currentWorker[0].Location);
    setDisplayLocation(worker.currentWorker[0].DisplayLocation);
  };

  useEffect(() => {
    dispatch(getWorker());
  }, []);

  return !worker.currentWorker.length > 0 ? (
    <>
      <button
        onClick={() => {
          setToggle(true);
        }}
      >
        Register as Contractor
      </button>
      <RegistrationModal
        isToggled={isToggled}
        setToggle={setToggle}
        formControls={formControls}
        changeInfo={changeInfo}
        modalType='Submit'
      >
        <form action='' className='registration-form' autoComplete='off'>
          <label htmlFor='username'>
            Username:{' '}
            {newWorkerExists && (
              <small className='red'>*that username is unavailable</small>
            )}
          </label>
          <input
            className={
              !newWorkerExists ? 'usernameInput' : 'usernameInput error'
            }
            name='username'
            type='text'
            placeholder='Your username...'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              dispatch(checkWorkerUsername({ username: e.target.value }));
            }}
          />
          <label htmlFor='bio'>Bio:</label>
          <textarea
            name='bio'
            id='bio'
            cols='30'
            rows='10'
            placeholder='Your bio...'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <label htmlFor='contactEmail'>Contact Email:</label>
          <input
            name='contactEmail'
            type='text'
            placeholder='Your contact email...'
            value={contactEmail}
            autoComplete='off'
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <label htmlFor='website'>Website:</label>
          <input
            name='website'
            type='text'
            placeholder='Your company website...'
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <label htmlFor='displayLocation'>Display Location:</label>
          <input
            name='displayLocation'
            type='text'
            value={displayLocation}
            placeholder='Your public location...'
            onChange={(e) => setDisplayLocation(e.target.value)}
          />
          <label htmlFor='location'>Zip Code:</label>
          <input
            name='location'
            type='text'
            value={location}
            autoComplete='off'
            placeholder='Your private zip code...'
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
      </RegistrationModal>
    </>
  ) : (
    <>
      <div className='workerInfo'>
        <h2>Worker Info</h2>
        <h5>Username:</h5>
        <p>{worker.currentWorker[0].Username}</p>
        <h5>Bio:</h5>
        <p>{worker.currentWorker[0].Bio}</p>
        <h5>Contact Email:</h5>
        <p>{worker.currentWorker[0].ContactEmail}</p>
        <h5>Website Link:</h5>
        <p>
          <a
            href={'http://' + worker.currentWorker[0].WebsiteLink}
            target='_blank'
          >
            {worker.currentWorker[0].WebsiteLink}
          </a>
        </p>
        <h5>Display Location:</h5>
        <p>{worker.currentWorker[0].DisplayLocation}</p>
        <h5>Zip Code:</h5>
        <p>{worker.currentWorker[0].Location}</p>
        <p>
          <button
            onClick={() => {
              setToggle(true);
              loadEditInfo();
            }}
          >
            <i className='far fa-edit'></i> Edit Info
          </button>
        </p>
        <hr />
      </div>
      <RegistrationModal
        isToggled={isToggled}
        setToggle={setToggle}
        formControls={formControls}
        changeInfo={changeInfo}
        modalType='Update'
      >
        <form action='' className='registration-form' autoComplete='off'>
          <label htmlFor='bio'>Bio:</label>
          <textarea
            name='bio'
            id='bio'
            cols='30'
            rows='10'
            placeholder='Your bio...'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <label htmlFor='contactEmail'>Contact Email:</label>
          <input
            name='contactEmail'
            type='text'
            placeholder='Your contact email...'
            value={contactEmail}
            autoComplete='off'
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <label htmlFor='website'>Website:</label>
          <input
            name='website'
            type='text'
            placeholder='Your company website...'
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <label htmlFor='displayLocation'>Display Location:</label>
          <input
            name='displayLocation'
            type='text'
            value={displayLocation}
            placeholder='Your public location...'
            onChange={(e) => setDisplayLocation(e.target.value)}
          />
          <label htmlFor='location'>Zip Code:</label>
          <input
            name='location'
            type='text'
            value={location}
            autoComplete='off'
            placeholder='Your private zip code...'
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
      </RegistrationModal>
    </>
  );
};

export default PersonalWorker;