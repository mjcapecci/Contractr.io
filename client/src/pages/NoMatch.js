import React from 'react';
import { Helmet } from 'react-helmet';

const NoMatch = () => {
  return (
    <>
      <Helmet>
        <title>Contractr.io | 404</title>
      </Helmet>
      <div>
        <h1>404... Oops!</h1>
        <h5>It looks like this page doesn't exist!</h5>
      </div>
    </>
  );
};

export default NoMatch;
