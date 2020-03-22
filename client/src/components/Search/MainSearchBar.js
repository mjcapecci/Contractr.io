import React from 'react';

const MainSearchBar = () => {
  return (
    <div className='input-group flex'>
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
  );
};

export default MainSearchBar;
