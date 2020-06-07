import React from 'react';
import LoaderIMG from '../../img/loader.gif';
import './layout.scss';

const Preloader = ({ height }) => {
  return (
    <img
      src={LoaderIMG}
      className='preloader'
      height={height || '50px'}
      alt='Loading spinner'
      border='none'
      box-shadow='none'
    />
  );
};

export default Preloader;
