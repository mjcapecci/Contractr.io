import React from 'react';
import { Link } from 'react-router-dom';

const SearchInputs = ({ data }) => {
  return data ? (
    <li className='list-group-item text-light bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='worker-search-picture col-sm'>
            <h3>{data.NameOf}</h3>
            <img
              src={data.Photo}
              height='100px'
              alt={'Photo of ' + data.NameOf}
            ></img>
          </div>
          <div className='worker-search-info col-sm'>
            <p>{data.DisplayLocation}</p>
            <p>
              <a href={`https://${data.WebsiteLink}`}>{data.WebsiteLink}</a>
            </p>
          </div>
          <div className='worker-search-bio col-sm'>
            <p>{data.bio}</p>
            <p>
              Go to <Link to={`/user/${data.Username}`}>Profile</Link>
            </p>
          </div>
        </div>
      </div>
    </li>
  ) : (
    // TODO: Make Spinner
    <div>Loading</div>
  );
};

export default SearchInputs;
