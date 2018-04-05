class TileState{
    constructor(r,c,pieces, allowedMove = true){
        this.row = r;
        this.column = c;
        this.pieces = pieces; // array of piece states
        this.allowedMove = allowedMove;
    }
}

export default TileState;