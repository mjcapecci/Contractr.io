import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MainSearchBar from '../components/Search/MainSearchBar';
import SearchInputGroup from '../components/Search/SearchInputGroup';

const Search = () => {
  return (
    <>
      <Helmet>
        <title>Contractr.io | Search</title>
      </Helmet>
      <section className='search'>
        <MainSearchBar />
        <SearchInputGroup />
      </section>
    </>
  );
};

export default Search;
