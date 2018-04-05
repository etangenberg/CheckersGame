import React from 'react';
import {shallow} from 'enzyme';
import Tile from './Tile';
import TileState from '../TileState';

describe('<Tile />', () => {
    it('Should render an empty div', () => {
        const state = new TileState(0,0,[]);
        const wrapper = shallow((
            <Tile tileState={state}/>
        )); 
       expect(wrapper.find('.tile')).toHaveLength(1);        
    });
});
