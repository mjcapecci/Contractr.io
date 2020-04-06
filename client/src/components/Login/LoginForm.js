import React from 'react';
import axios from 'axios';

// TODO: Refactor this entire component to run through Redux
const LoginForm = () => {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = 'http://localhost:5000/api/auth/google';
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginForm;
