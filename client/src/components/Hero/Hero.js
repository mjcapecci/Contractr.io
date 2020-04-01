import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../actions/userActions';
import './hero.scss';

import MainSearchBar from '../Search/MainSearchBar';

const Hero = () => {
  // const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className='jumbotron jumbotron-fluid bg-transparent hero'>
      <h1 className='display-4'>Find Local Help</h1>
      <p className='lead'>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <button onClick={() => dispatch(getUser())}>TEST</button>
      <MainSearchBar />
    </div>
  );
};

export default Hero;
