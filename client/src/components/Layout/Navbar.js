import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './layout.scss';

const Navbar = (props) => {
  const path = useLocation().pathname;
  const authState = useSelector((state) => state.auth.isAuthenticated);
  const [activeLink, setActiveLink] = useState(path);

  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link
          className={activeLink !== '/login' ? 'nav-link' : 'nav-link active'}
          to='/login'
          onClick={() => setActiveLink('/login')}
        >
          Login
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link
          className={activeLink !== '/search' ? 'nav-link' : 'nav-link active'}
          to='/search'
          onClick={() => setActiveLink('/search')}
        >
          Search
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={activeLink !== '/profile' ? 'nav-link' : 'nav-link active'}
          to='/profile'
          onClick={() => setActiveLink('/profile')}
        >
          Profile
        </Link>
      </li>
    </Fragment>
  );

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
            Home
          </Link>
        </li>
        {authState ? authLinks : guestLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
