import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatus } from '../../actions/authActions';
import { getProfile, logoutUser } from '../../actions/userActions';
import { Link, useLocation } from 'react-router-dom';
import Preloader from './Preloader';
import './layout.scss';

const Navbar = (props) => {
  const path = useLocation().pathname;
  const authState = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(path);

  const [logoutTimer, setLogoutTimer] = useState(false);

  useEffect(() => {
    dispatch(getStatus());
    dispatch(getProfile());
    // eslint-disable-next-line
  }, [authState]);

  useEffect(() => {
    setActiveLink(path);
    // eslint-disable-next-line
  }, [path]);

  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link
          className={activeLink !== '/login' ? 'nav-link' : 'nav-link active'}
          to='/login'
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
          className={activeLink !== '/profile' ? 'nav-link' : 'nav-link active'}
          to='/profile'
        >
          Profile
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/'
          onClick={() => {
            setLogoutTimer(true);
            dispatch(logoutUser());
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          {!logoutTimer ? (
            'Logout'
          ) : (
            <Preloader
              height={'30px'}
              style={{ transform: 'translateY(5px)' }}
            />
          )}
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between shadow hide-in-mobile'>
      <Link className='navbar-brand' to='/' onClick={() => setActiveLink('/')}>
        Contractr.io
      </Link>
      <div id='main-nav'>
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
      </div>
    </nav>
  );
};

export default Navbar;
