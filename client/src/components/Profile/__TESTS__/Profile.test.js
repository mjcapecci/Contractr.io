import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PersonalProfile from '../PersonalProfile';

describe('Footer', () => {
  test('renders', () => {
    const prop = (
      <MemoryRouter>
        <PersonalProfile />
      </MemoryRouter>
    );
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});
