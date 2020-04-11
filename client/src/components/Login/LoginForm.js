import React from 'react';

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
      <button onClick={() => console.log(document.cookie)}>Test</button>
    </div>
  );
};

export default LoginForm;
