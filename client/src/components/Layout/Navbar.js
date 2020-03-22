import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between shadow'>
      <Link className='navbar-brand'>Contractr.io</Link>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link
            className={activeLink !== 1 ? 'nav-link' : 'nav-link active'}
            to='/'
            onClick={() => setActiveLink(1)}
          >
            Landing
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={activeLink !== 2 ? 'nav-link' : 'nav-link active'}
            to='/search'
            onClick={() => setActiveLink(2)}
          >
            Search
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={activeLink !== 3 ? 'nav-link' : 'nav-link active'}
            to='/login'
            onClick={() => setActiveLink(3)}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
