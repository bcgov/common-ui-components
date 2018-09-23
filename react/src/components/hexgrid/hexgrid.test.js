import React from 'react';
import { shallow } from 'enzyme';
import Hexgrid from './Hexgrid';

let wrapper;

beforeEach(() => {
    const items = [1, 2, 3, 5, 6].map(i => <div>{i}</div>);
  wrapper = shallow(<Hexgrid items={items}/>);
});

describe('Hexgrid component', () => {
  it('renders without crashing', () => {
    expect(wrapper);
  });
});
