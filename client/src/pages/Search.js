import React from 'react';

import MainSearchBar from '../components/Search/MainSearchBar';
import SearchInputGroup from '../components/Search/SearchInputGroup';

const Search = () => {
  return (
    <section className='search'>
      <MainSearchBar />
      <SearchInputGroup />
    </section>
  );
};

export default Search;
