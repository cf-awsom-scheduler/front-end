import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../pages/index.js';

describe('With Enzyme', () => {
  it('Works', () => {
    const home = shallow(<Home />);
    expect(home).toBeTruthy();
  });
});
