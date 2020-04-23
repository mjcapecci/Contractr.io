import React from 'react';

import PublicProfile from '../components/PublicProfile/PublicProfile';

const User = ({ match }) => {
  const user = match ? match.params.user : null;
  return <PublicProfile user={user} />;
};

export default User;
