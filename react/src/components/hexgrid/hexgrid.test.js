import React from 'react'
import {shallow} from 'enzyme';

describe('Hexgrid component', () => {
    it('renders without crashing', () => {
        expect(shallow(<div>hello</div>));
    });
});