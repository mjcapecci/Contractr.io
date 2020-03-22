import React from 'react';
import './layout.scss';

const Footer = () => {
  return (
    <footer className='container mb-2'>
      © {new Date().getFullYear()} Built by Michael Capecci
    </footer>
  );
};

export default Footer;
