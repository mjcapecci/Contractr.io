import React from 'react';
import './login.scss';

const LoginForm = () => {
  return (
    <div>
      <button
        className='mx-auto d-block'
        onClick={() => {
          window.location.href = 'http://localhost:5000/api/auth/google';
        }}
      >
        <i class='fab fa-google'></i> Login with <strong>Google</strong>
      </button>
    </div>
  );
};

export default LoginForm;
