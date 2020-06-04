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

  const button_variants = {
    button_open: { x: 0 },
    button_closed: { x: 10 },
  };

  useEffect(() => {
    setActiveLink(path);
    // eslint-disable-next-line
  }, [path]);

  const guestLinks = (
    <Fragment>
      <Link
        className={activeLink !== '/login' ? 'nav-link' : 'nav-link active'}
        to='/login'
      >
        Login
      </Link>
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
      <motion.div
        transition={{ type: 'tween', duration: 0.09 }}
        animate={isToggled ? 'button_open' : 'button_closed'}
        variants={button_variants}
        className='mobile-nav-button-container mobile-only'
        onClick={() => {
          setToggle(!isToggled);
        }}
      >
        <motion.div
          animate={isToggled ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          className='mobile-nav-button-line mobile-only'
        ></motion.div>
        <motion.div
          transition={{ duration: 0.1 }}
          animate={isToggled ? { opacity: 0 } : { opacity: 1 }}
          className='mobile-nav-button-line mobile-only'
        ></motion.div>
        <motion.div
          animate={isToggled ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          className='mobile-nav-button-line mobile-only'
        ></motion.div>
      </motion.div>
    </>
  );
};

export default MobileNavbar;
