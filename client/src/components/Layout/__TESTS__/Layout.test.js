import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

describe('Navbar', () => {
  test('renders', () => {
    const prop = (
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Footer', () => {
  test('renders', () => {
    const prop = <Footer />;
    const wrapper = shallow(prop);
    expect(wrapper.exists()).toBe(true);
  });
});
