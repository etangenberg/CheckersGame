import * as CheckersLogic from './CheckersLogic';
import Piece from './component/Piece';
import PieceState from './PieceState';

describe('CheckersLogic', () => {
    it('getInitializeState returns 8x8 board with states', () => {
            let state = CheckersLogic.getInitialState(0);
            expect(state.CurrentPlayer).toBe(0);
    });

    it('selected Piece is Allowed To Move one Place Ahead Left And Right for player 0', () => {
        let state = CheckersLogic.getInitialState(0);
        const row = 2;
        const col = 1;
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
    //    console.log(newState);
        expect(newState.tileStates[row+1][col-1].allowedMove).toBe(true);
        expect(newState.tileStates[row+1][col].allowedMove).toBe(false);
        expect(newState.tileStates[row+1][col+1].allowedMove).toBe(true);
    });

    it('selected Piece is Allowed To Move one Place Ahead Left And Right works for player 1', () => {
        let state = CheckersLogic.getInitialState(1);
        const row = 5;
        const col = 2;
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
  //      console.log(newState);
        expect(newState.tileStates[row-1][col-1].allowedMove).toBe(true);
        expect(newState.tileStates[row-1][col].allowedMove).toBe(false);
        expect(newState.tileStates[row-1][col+1].allowedMove).toBe(true);
    });

    it('Other tiles are not allowed to move too', () => {
        let state = CheckersLogic.getInitialState(0);
        const row = 2;
        const col = 1;
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
        newState.tileStates.forEach((rowArray,r) => {
            rowArray.forEach((tile, c) => {
                if ((r === (row + 1)) && ((c === col-1) || (c === col+1)) ){
                    expect(tile.allowedMove).toBe(true)
                }else{
                    expect(tile.allowedMove).toBe(false);
                } 
            });
        });        
    });


    it('It is not allowed to cross borders', () => {
        let state = CheckersLogic.getInitialState(0);
        const row = 2;
        const col = 7;
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
        newState.tileStates.forEach((rowArray,r) => {
            rowArray.forEach((tile, c) => {
                if (r === (row + 1) && (c === col-1) ){
                    expect(tile.allowedMove).toBe(true)
                }else{
                    expect(tile.allowedMove).toBe(false);
                } 
            });
        });
    });

    it('It is not allowed to move to position containing a piece', () => {
        // Arrange
        let state = CheckersLogic.getInitialState(0);
        const row = 2;
        const col = 5;
        state.tileStates[row+1][col+1].pieces = [new PieceState(99, row+1, col+1)];
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
        let tile = newState.tileStates[3][4];
        expect(tile.allowedMove).toBe(true);
        tile = newState.tileStates[3][6];
        expect(tile.allowedMove).toBe(false);        
    });

    it('It is allowed to move over a position containing a opponents piece, when empty', () => {
        // Arrange
        let state = CheckersLogic.getInitialState(0);
        const row = 2;
        const col = 5;
        state.tileStates[row+1][col+1].pieces = [new Piece()];
        let selectedPieceState = state.tileStates[row][col].pieces[0];
        let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
        newState.tileStates.forEach((rowArray,r) => {
            rowArray.forEach((tile, c) => {
                if ( 
                    (r === (row + 1) && (c === col-1))
                    || ( (r === row + 2) && ( c === col + 2))  ){
                    expect(tile.allowedMove).toBe(true)
                }else{
                    expect(tile.allowedMove).toBe(false);
                } 
            });
        });
    });
    
    it('Selecting piece deselects previous', () => {
            // Arrange
            let state = CheckersLogic.getInitialState(0);
            const row = 2;
            const col = 1;
            let selectedPieceState = state.tileStates[row][col].pieces[0];
            let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
            
            let newSelectedPieceState = state.tileStates[row][col+4].pieces[0];
            newState = CheckersLogic.getPieceSelectedAllowedMovesState(newState, newSelectedPieceState);
    
            expect(newState.tileStates[row][col].pieces[0].selected).toBe(false);        
            expect(newState.tileStates[row+1][col-1].allowedMove).toBe(false);      
            expect(newState.tileStates[row+1][col+1].allowedMove).toBe(false);      
         });

    // it('Only one piece can be selected', () => {
    //     // Arrange
    //     let state = CheckersLogic.getInitialState(0);
    //     const row = 2;
    //     const col = 5;
    //     let selectedPieceState = state.tileStates[row][col].pieces[0];
    //     let newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, selectedPieceState);
        
    //     let newSelectedPieceState = state.tileStates[row][col-2].pieces[0];
    //     newState = CheckersLogic.getPieceSelectedAllowedMovesState(state, newSelectedPieceState);

    //     expect(newState.selectedPiece).toBe(newState.tileStates[row][col].pieces[0]);        
    //     expect(newState.selectedPiece.selected).toBe(true);        
    // });
});