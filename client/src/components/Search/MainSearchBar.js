import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeSearch } from '../../actions/searchActions';

const MainSearchBar = ({ clear }) => {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (search) {
      setKeyword(search.keywordField);
      setLocation(search.locationField);
    }
  }, [search]);

  useEffect(() => {
    if (clear) {
      setKeyword('');
      setLocation('');
    }
  }, []);

  const onSubmit = () => {
    const searchQuery = {
      keywordField: keyword,
      locationField: location,
    };

    dispatch(makeSearch(searchQuery));
  };

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
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <div>
          <Link
            to='/search'
            className='btn btn-primary btn-lg mt-4'
            role='button'
            onClick={() => onSubmit()}
          >
            Search
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default MainSearchBar;
