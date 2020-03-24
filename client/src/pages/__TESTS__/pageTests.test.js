import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Landing from '../Landing';
import Search from '../Search';
import User from '../User';

describe('Landing page', () => {
  test('renders', () => {
    const props = [<Landing />, <Search />, <User />];
    props.map(prop => {
      const wrapper = shallow(prop);
      expect(wrapper.exists()).toBe(true);
    });
  });
});
