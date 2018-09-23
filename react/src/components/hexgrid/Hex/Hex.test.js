import React from 'react';
import { shallow } from 'enzyme';
import Hex from './Hex';

describe('Hex Component', () => {
  it('renders without crashing', () => {
    shallow(<Hex>blah</Hex>);
  });
});
