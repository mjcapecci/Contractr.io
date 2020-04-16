import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWorker } from '../../actions/workerActions';
import RegistrationModal from './RegistrationModal';
import './profile.scss';

const PersonalWorker = () => {
  const worker = useSelector((state) => state.worker);
  const dispatch = useDispatch();
  const [isToggled, setToggle] = useState(false);

  const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [displayLocation, setDisplayLocation] = useState('');

  const formControls = {
    setBio,
    setWebsite,
    setLocation,
    setDisplayLocation,
  };

  const changeInfo = {
    bio,
    website,
    location,
    displayLocation,
  };

  const loadEditInfo = () => {
    setBio(worker.currentWorker[0].Bio);
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
        <form action='' className='registration-form'>
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
        <h5>Bio:</h5>
        <p>{worker.currentWorker[0].Bio}</p>
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
        <form action='' className='registration-form'>
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
            placeholder='Your private zip code...'
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
      </RegistrationModal>
    </>
  );
};

export default PersonalWorker;
