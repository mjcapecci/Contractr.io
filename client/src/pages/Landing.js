import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/Hero/About';
import { Helmet } from 'react-helmet';

const Landing = () => {
  return (
    <section className='landing'>
      <Helmet>
        <title>Contractr.io | Home</title>
      </Helmet>
      <Hero />
      <About />
    </section>
  );
};

export default Landing;
