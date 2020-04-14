import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MainSearchBar from '../MainSearchBar';
import SearchInputGroup from '../SearchInputGroup';
import SearchInputs from '../SearchInputs';

describe('MainSearchBar', () => {
  test('renders', () => {
    const prop = (
      <MemoryRouter>
        <MainSearchBar />
      </MemoryRouter>
    );
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('SearchInputGroup', () => {
  test('renders', () => {
    const prop = <SearchInputGroup />;
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('SearchInputs', () => {
  test('renders', () => {
    const prop = <SearchInputs />;
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});
