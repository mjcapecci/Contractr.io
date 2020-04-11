import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatus } from '../actions/authActions';
import Hero from '../components/Hero/Hero';

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus());
  });

  return (
    <section className='landing'>
      <Hero />
    </section>
  );
};

export default Landing;
