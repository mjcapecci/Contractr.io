import React from 'react';

const Upcoming = () => {
  const version = 'Beta 1.3';

  return (
    <div className='upcoming-features'>
      <h1>Upcoming Features:</h1>
      <hr />
      <p>Contractr.io is currently in version {version}</p>
      <p>
        When the following features are complete, Contractr.io will enter Full
        Release Version 1.0
      </p>
      <h3>Upcoming Feature 1: Random Search</h3>
      <hr />
      <p>
        The goal of this application is to provide a platform for contractors
        and potential clients to reach each other in a shared space that brings
        both parties together. That will always be the mission, but the way this
        application intends to carry out that mission is in the process of being
        revamped. Instead of competing with other similar websites in this
        space, we have decided that a layer of randomness is an interesting spin
        on the typical search algorithm.
        <p>
          This format will make our application's search algorithm unique in
          that:
        </p>
        <ul>
          <li>
            It will be impossible for contractors to pay for any sort of
            rankings advantage.
          </li>
          <li>
            Every contractor has a chance on every user search to appear at the
            top of the rankings.
          </li>
        </ul>
        <h5>Details:</h5>
        <p>
          On any given user search, Contractr.io will present the user with up
          to 10 applicable matches to the search query. The user will be
          presented with an option to "refresh" the search, thus receiving a new
          selection of 10 random results.
        </p>
        <p>
          We believe these changes will make Contractr.io an interesting
          community for contractors to advertise their businesses because
          lesser-known contractors will occasionally have an opportunity for
          high visibility. In some cases, a moment of high visibility can be a
          great windfall for a beginner who is eager to start impressing clients
          and building a reputation.
        </p>
      </p>
      <h3>Upcoming Feature 2: Improved Mobile Profile Page</h3>
      <hr />
      <p>
        The mobile profile page is undergoing a revamp that will be launched
        with Version 1.0
      </p>
    </div>
  );
};

export default Upcoming;
