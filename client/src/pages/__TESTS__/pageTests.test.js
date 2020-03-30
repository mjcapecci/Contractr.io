import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Landing from '../Landing';
import Search from '../Search';
import User from '../User';

describe('Landing page', () => {
  test('renders', () => {
    const prop = <Landing />;
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Search', () => {
  test('renders', () => {
    const prop = <Search />;
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('User', () => {
  test('renders', () => {
    const prop = <User />;
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});
