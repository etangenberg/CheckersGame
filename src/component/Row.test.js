import React from 'react';
import {shallow} from 'enzyme';
import Row from './Row';
import Tile from './Tile';
import TileState from '../TileState';

describe('<Row />', () => {
    it('Should render a div with class .row and 8 .tile divs', () => {
        const row = [
            new TileState(1,0,[]),
            new TileState(1,1,[])
        ]
        const wrapper = shallow(
            <Row row="1" tileStates={row} />
        );

       // console.log('Wrapper', wrapper.debug());
       expect(wrapper.find('.row').length).toBe(1);        
       expect(wrapper.find(Tile).length).toBe(2);          
    });
});
