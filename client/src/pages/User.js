import React from 'react';

const User = ({ match }) => {
  const user = match ? match.params.user : null;
  return (
    <section className='user'>
      <h1>Profile</h1>
      <h3>{user}</h3>
    </section>
  );
};

export default User;
