import React from 'react';
import './login.scss';

const LoginAbout = () => {
  return (
    <div className='login-about'>
      <div className='login-about-content'>
        <h2 className='text-center'>Help-Seekers</h2>
        <ul>
          <li>◈ Can search for contractors based on skills and location</li>

          <li>◈ Private accounts that will not appear in search results</li>
          <li>
            ◈ <strong>Future update:</strong> Will be able to message
            contractors directly on this platform
          </li>
        </ul>
      </div>
      <div className='login-about-content'>
        <h2 className='text-center'>Contractors</h2>
        <ul>
          <li>◈ Create username, bio, and contact information</li>
          <li>◈ Can update skills to be found in search results</li>
          <li>
            ◈ Will be found randomly in search results for applicable searches
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginAbout;
