import React from 'react';
import './search.scss';

import SearchInputs from './SearchInputs';

const SearchInputGroup = () => {
  const sampleInputs = [
    {
      name: 'Dave Roberts',
      skills: 'Carpentry, Electrical',
      location: 'Somewhere, USA',
      website: `www.daveroberts.com`,
      bio: `Lorem impsum this is a test, there is not actually any meaning to the words that are being typed here. Please read this at your own risk`
    },
    {
      name: 'Melissa Jones',
      skills: 'Carpentry, Electrical',
      location: 'Somewhere, USA',
      website: `www.melissajones.com`,
      bio: `Lorem impsum this is a test, there is not actually any meaning to the words that are being typed here. Please read this at your own risk`
    },
    {
      name: 'Elija Smith',
      skills: 'Carpentry, Electrical',
      location: 'Somewhere, USA',
      website: `www.elijasmith.com`,
      bio: `Lorem impsum this is a test, there is not actually any meaning to the words that are being typed here. Please read this at your own risk`
    }
  ];

  return (
    <ul className='list-group mt-4 search-results shadow'>
      {sampleInputs.map(input => (
        <SearchInputs data={input} />
      ))}
    </ul>
  );
};

export default SearchInputGroup;
