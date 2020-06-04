import React from 'react';
import { Helmet } from 'react-helmet';

import PublicProfile from '../components/PublicProfile/PublicProfile';

const User = ({ match }) => {
  const user = match ? match.params.user : null;
  return (
    <>
      <Helmet>
        <title>{'Contractr.io | ' + user}</title>
      </Helmet>
      <PublicProfile user={user} />
    </>
  );
};

export default User;
