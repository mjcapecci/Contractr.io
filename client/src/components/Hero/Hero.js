import React from 'react';
import './hero.scss';

import MainSearchBar from '../Search/MainSearchBar';

const Hero = () => {
  return (
    <div className='jumbotron jumbotron-fluid bg-transparent hero'>
      <h1 className='display-4'>Find Local Help</h1>
      <p className='lead'>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <MainSearchBar />
    </div>
  );
};

export default Hero;
