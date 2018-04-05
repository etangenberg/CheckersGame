import React from 'react';
import {shallow} from 'enzyme';
import Tile from './Tile';

describe('<Tile />', () => {
    it('Should render an empty div', () => {
        const wrapper = shallow((
            <Tile />
        )); 
       expect(wrapper.find('.tile')).toHaveLength(1);        
    });
});
