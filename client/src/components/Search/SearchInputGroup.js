import React from 'react';
import { useSelector } from 'react-redux';
import './search.scss';

import SearchInputs from './SearchInputs';

let resultCounter = 0;

const SearchInputGroup = () => {
  const results = useSelector((state) => state.search.results);

  return (
    results.length > 0 && (
      <>
        <h2 className='mt-4 mb-4'>Search Results</h2>
        <ul className='list-group mt-4 search-results shadow'>
          {results.map((input) => (
            <SearchInputs data={input} key={resultCounter++} />
          ))}
        </ul>
      </>
    )
  );
};

export default SearchInputGroup;
