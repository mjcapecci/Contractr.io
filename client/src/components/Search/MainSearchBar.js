import React, { Fragment } from 'react';

const MainSearchBar = () => {
  return (
    <Fragment>
      <div className='input-group flex main-search'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='addon-wrapping'>
            What
          </span>
        </div>
        <input
          type='text'
          className='form-control mr-3 rounded-right'
          placeholder='Skills, Keywords, Etc.'
          aria-label='Skills, Keywords, Etc.'
          aria-describedby='addon-wrapping'
        />
        <div className='input-group-prepend'>
          <span className='input-group-text rounded-left' id='addon-wrapping'>
            Where
          </span>
        </div>
        <input
          type='text'
          className='form-control rounded-right'
          placeholder='City and State, Zip Code'
          aria-label='Where are you?'
          aria-describedby='addon-wrapping'
        />
      </div>
      <div>
        <p className='lead'>
          <a className='btn btn-primary btn-lg mt-4' href='#' role='button'>
            Search
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default MainSearchBar;
