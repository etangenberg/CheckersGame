import React from 'react';
import GameState from './GameState';
import TileState from './TileState';

describe('GameState', () => {
    it('CurrentPlyer is set by constructor', () => {
        const player = 0;
        const state =  new GameState(player);

       expect(state.CurrentPlayer).toBe(player);
    });

    it('Initial pieces are set', () => {
        const player = 0;
        const state =  new GameState(player, 8, 8);
        const pieces = state.getInitialTileStates(0,1);

        // console.log('Pieces', pieces);
        expect(pieces[0][0].pieces.length).toBe(0);        
        expect(pieces[1][0].pieces.length).toBe(1);        
        expect(pieces[2][0].pieces.length).toBe(0);        
        expect(pieces[0][1].pieces.length).toBe(1);        
        expect(pieces[1][1].pieces.length).toBe(0);        
        expect(pieces[2][1].pieces.length).toBe(1);        
    });
});
