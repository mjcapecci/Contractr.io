import React from 'react';
import { useSelector } from 'react-redux';
import './search.scss';

import SearchInputs from './SearchInputs';

let resultCounter = 0;

const SearchInputGroup = () => {
  const results = useSelector((state) => state.search.results);
  return (
    <>
      <h2 className='mt-4 mb-4'>Search Results</h2>
      <ul className='list-group mt-4 search-results shadow'>
        {results != 'Please enter all search terms.' &&
          results.map((input) => (
            <SearchInputs data={input} key={resultCounter++} />
          ))}
      </ul>
      {results == 'Please enter all search terms.' && (
        <>
          <h5>There are no results for this search!</h5>
          <small>Please make sure both search fields are complete.</small>
        </>
      )}
    </>
  );
};

export default SearchInputGroup;
