class PieceState {    
    constructor(id,row,col,player=0,selected = false){    
        this.id = id;    
        this.row = row;
        this.column = col;
        this.player = player;
        this.selected = selected;
    }
}

export default PieceState;