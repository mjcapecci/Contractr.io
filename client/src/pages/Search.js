import React from 'react';

import MainSearchBar from '../components/Search/MainSearchBar';
import SearchInputGroup from '../components/Search/SearchInputGroup';

const Search = () => {
  return (
    <section className='search'>
      <h2 className='mt-4 mb-4'>Search Results</h2>
      <MainSearchBar />
      <SearchInputGroup />
    </section>
  );
};

export default Search;
