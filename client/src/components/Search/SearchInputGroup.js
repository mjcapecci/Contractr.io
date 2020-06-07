import React from 'react';
import { useSelector } from 'react-redux';
import './search.scss';

import SearchInputs from './SearchInputs';

let resultCounter = 0;

const SearchInputGroup = () => {
  const results = useSelector((state) => state.search.results);
  return (
    <div className='search-results'>
      <h2 className='mt-4 mb-4'>
        {results.length > 0 && results !== 'Please enter all search terms.'
          ? `Search Results (${results.length})`
          : ''}
      </h2>
      <ul className='list-group mt-4 search-results'>
        {results !== 'Please enter all search terms.' ? (
          results.map((input) => (
            <SearchInputs data={input} key={resultCounter++} />
          ))
        ) : (
          <li>
            <div>
              {' '}
              <h5>There are no results for this search!</h5>
              <small>Please make sure both search fields are complete.</small>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchInputGroup;
