import React from 'react';
import {shallow} from 'enzyme';
import Piece from './Piece';

describe('<Tile />', () => {
    it('Should render an empty div', () => {
        const wrapper = shallow((
            <Piece />
        )); 
       expect(wrapper.find('.piece')).toHaveLength(1);        
    });
});
