import React from 'react';

import MainSearchBar from '../Search/MainSearchBar';

const Hero = () => {
  return (
    <div className='jumbotron jumbotron-fluid bg-transparent'>
      <h1 className='display-4'>Find Local Talent</h1>
      <p className='lead'>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <MainSearchBar />
      <p className='lead'>
        <a className='btn btn-primary btn-lg mt-4' href='#' role='button'>
          Search
        </a>
      </p>
    </div>
  );
};

export default Hero;
