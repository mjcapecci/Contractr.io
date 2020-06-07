import React from 'react';
import { Helmet } from 'react-helmet';

import LoginAbout from '../components/Login/LoginAbout';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Contractr.io | Login</title>
      </Helmet>
      <LoginAbout />
      <LoginForm></LoginForm>
    </>
  );
};

export default Login;
