import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Hero from '../Hero';

describe('Landing page', () => {
  test('renders', () => {
    const prop = <Hero />;
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});
