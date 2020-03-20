import React from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';

const Navbar = ({ location }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-end shadow'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link active' to='/'>
            Landing
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/search'>
            Search
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
