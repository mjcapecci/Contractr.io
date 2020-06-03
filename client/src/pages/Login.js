import React from 'react';
import { Helmet } from 'react-helmet';

import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Contractr.io | Login</title>
      </Helmet>
      <h2>Create an account to connect with or become a contractor.</h2>
      <LoginForm></LoginForm>
    </>
  );
};

export default Login;
