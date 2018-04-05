class PieceState {    
    constructor(row,col,player,selected = false){        
        this.row = row;
        this.column = col;
        this.player = player;
        this.selected = selected;
    }
}

export default PieceState;