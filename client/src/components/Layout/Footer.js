import React from 'react';
import './layout.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='container'>
      <div>
        <small>
          ©{new Date().getFullYear()} Built by{' '}
          <a
            href='https://www.michaelcapecci.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Michael Capecci
          </a>
        </small>
      </div>
      <div className='hide-in-mobile'>
        <small>
          <Link to='/upcoming'>Upcoming Features</Link>
        </small>
      </div>
      <div>
        <small>Beta 1.3</small>
      </div>
    </footer>
  );
};

export default Footer;
