import React from 'react';
import { Link } from 'react-router-dom';

const SearchInputs = ({ data }) => {
  return data ? (
    <li className='list-group-item mt-3 text-light bg-dark'>
      <div className='container'>
        <h3 className='text-center search-result-name'>{data.NameOf}</h3>
        <div className='row'>
          <div className='worker-search-picture col-sm my-auto'>
            <img
              className='mx-auto d-block'
              src={data.Photo}
              height='100px'
              alt={'Photo of ' + data.NameOf}
            ></img>
          </div>
          <div className='worker-search-info col-sm my-auto'>
            <p className='text-center'>{data.DisplayLocation}</p>
            <p className='text-center'>
              <a
                href={`https://${data.WebsiteLink}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.WebsiteLink}
              </a>
            </p>
          </div>
          <div className='worker-search-bio col-sm my-auto'>
            <p className='text-center'>{data.Bio}</p>
            <p className='text-center'>
              Go to <Link to={`/user/${data.Username}`}>Profile</Link>
            </p>
          </div>
        </div>
      </div>
    </li>
  ) : (
    <div>Loading</div>
  );
};

export default SearchInputs;
