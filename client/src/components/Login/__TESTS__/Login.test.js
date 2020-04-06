import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import LoginForm from '../Footer';

describe('Footer', () => {
  test('renders', () => {
    const prop = <LoginForm />;
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });