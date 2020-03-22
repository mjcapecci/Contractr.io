import React from 'react';

const SearchInputs = ({ data }) => {
  return (
    <li className='list-group-item text-light bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='worker-search-info col-sm'>
            <h3>{data.name}</h3>
            <p>{data.skills}</p>
            <p>{data.location}</p>
            <p>
              <a href={`https://${data.website}`}>{data.website}</a>
            </p>
          </div>
          <div className='worker-search-picture col-sm'>
            <p>No Picture</p>
          </div>
          <div className='worker-search-bio col-sm'>
            <p>{data.bio}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SearchInputs;
