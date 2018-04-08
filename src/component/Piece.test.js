import React from 'react';
import {shallow} from 'enzyme';
import Piece from './Piece';
import PieceState from '../PieceState';

describe('<Tile />', () => {
    it('Should render an empty div', () => {
        const state = new PieceState(9,5,5,1,true );
        const wrapper = shallow((
            <Piece pieceState={state}/>
        )); 
       expect(wrapper.find('.piece')).toHaveLength(1);        
    });
});
