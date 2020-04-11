import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './layout.scss';

const Navbar = (props) => {
  const path = useLocation().pathname;

  const [activeLink, setActiveLink] = useState(path);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between shadow'>
      <Link className='navbar-brand' to='/'>
        Contractr.io
      </Link>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link
            className={activeLink !== '/' ? 'nav-link' : 'nav-link active'}
            to='/'
            onClick={() => setActiveLink('/')}
          >
            Landing
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              activeLink !== '/search' ? 'nav-link' : 'nav-link active'
            }
            to='/search'
            onClick={() => setActiveLink('/search')}
          >
            Search
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={activeLink !== '/login' ? 'nav-link' : 'nav-link active'}
            to='/login'
            onClick={() => setActiveLink('/login')}
          >
            Login
          </Link>
        </li>
        <Link
          className={activeLink !== '/profile' ? 'nav-link' : 'nav-link active'}
          to='/profile'
          onClick={() => setActiveLink('/profile')}
        >
          <li className='nav-item'>Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
