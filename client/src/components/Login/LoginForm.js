import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = 'https://www.contractr.io/api/auth/google';
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginForm;
