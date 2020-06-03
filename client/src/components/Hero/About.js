import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

const About = () => {
  return (
    <section className='about'>
      <h2 className='text-center'>What is Contractr.io?</h2>
      <div className='about-cards'>
        <div className='about-card-cards'>
          <p>
            Contractr.io is a tool for linking clients with contractors who can
            help them complete specialized projects.
          </p>
        </div>
        <div className='about-card-cards'>
          <p>
            Our objective is to provide a lightweight, no-frills solution for
            helping people get work done.
          </p>
        </div>
        <div className='about-card-cards'>
          <p>
            This tool will be free forever, does not expect any percentage of
            money that is exchanged between parties, and is completely open
            source.
          </p>
        </div>
      </div>
      <p className='lead CTA text-center'>
        Want to join the community?{' '}
        <Link to='/login'>Click here to get started!</Link>
      </p>
    </section>
  );
};

export default About;
