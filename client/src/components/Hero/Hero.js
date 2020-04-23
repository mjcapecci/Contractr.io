import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearSearch } from '../../actions/searchActions';
import './hero.scss';

import MainSearchBar from '../Search/MainSearchBar';

const Hero = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearch());
  }, []);

  return (
    <div className='jumbotron jumbotron-fluid bg-transparent hero'>
      <h1 className='display-4'>Find Local Help</h1>
      <p className='lead'>
        Enter details about the contractor you are looking for.
      </p>
      <MainSearchBar clear={true} />
    </div>
  );
};

export default Hero;
