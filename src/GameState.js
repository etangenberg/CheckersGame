import TileState from './TileState';
import PieceState from './PieceState';

class  GameState {
    constructor(turn,rows,columns) {        
        this.CurrentPlayer = turn;
        this.rows = rows;
        this.columns = columns;
        this.tileStates = this.getInitialTileStates();
    }
    
    getInitialTileStates(){                        
        let rowstates = [];            
        this.piecesCount = 0;
        for(let i =0; i< this.rows; i++){
            let colStates = [];
            for(let c =0; c< this.columns; c++){
                const tiles = this.getInitialTileState(i,c);
                colStates.push(tiles);
            }
            rowstates.push(colStates);
        }

        return rowstates
    }

    getInitialTileState(row, column) {           
        let pieces = [];     
        if (this.hasPotentialPiece(row, column)){            
            if( row < 3 ){
                pieces.push(new PieceState(this.piecesCount,row,column,0));
                this.piecesCount += 1;
            }else if (row > 4){
                pieces.push(new PieceState(this.piecesCount, row,column,1));
                this.piecesCount += 1;
            }            
        }   
        return new TileState(row,column, pieces);         
    }

    hasPotentialPiece(row,col){
        return ((row % 2) && !(col % 2)) 
                || (!(row % 2) && (col % 2));
    }
}

export default GameState;