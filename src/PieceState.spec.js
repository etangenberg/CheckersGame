import React from 'react';
import PieceState from './PieceState';

describe('PieceState', () => {
    it('Contains row and column position of player', () => {
        const row = 4;
        const column = 9;
        const id =1;
        const state =  new PieceState(id, row, column);

       expect(state.row).toBe(row);
       expect(state.column).toBe(column);
    });

    it('Default not selected', () => {
        const row = 4;
        const column = 9;
        const id = 2;
        const state =  new PieceState(id, row, column);
       
       expect(state.selected).toBe(false);
    });
});
