import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';

const MobileNavbar = () => {
  const path = useLocation().pathname;
  const authState = useSelector((state) => state.auth.isAuthenticated);
  const [isToggled, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(path);
  const dispatch = useDispatch();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacitx: 0, x: '-100%' },
  };

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
      <Link
        className={activeLink !== '/profile' ? 'nav-link' : 'nav-link active'}
        to='/profile'
      >
        Profile
      </Link>
      <Link
        className='nav-link'
        to='/'
        onClick={() => {
          dispatch(logoutUser());
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }}
      >
        Logout
      </Link>
    </Fragment>
  );

  return (
    <>
      <motion.nav
        className='mobile-navbar mobily-only'
        transition={{ type: 'tween', duration: 0.09 }}
        animate={isToggled ? 'open' : 'closed'}
        variants={variants}
      >
        <Link
          className={activeLink !== '/' ? 'nav-link' : 'nav-link active'}
          to='/'
          onClick={() => setActiveLink('/')}
        >
          Home
        </Link>
        {authState ? authLinks : guestLinks}
      </motion.nav>
      <div
        className='mobile-nav-button-container mobile-only'
        onClick={() => {
          setToggle(!isToggled);
        }}
      >
        <div className='mobile-nav-button-line mobile-only'></div>
        <div className='mobile-nav-button-line mobile-only'></div>
        <div className='mobile-nav-button-line mobile-only'></div>
      </div>
    </>
  );
};

export default MobileNavbar;
