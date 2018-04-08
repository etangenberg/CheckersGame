class TileState{
    constructor(r,c,pieces, allowedMove = false, hitPieces = []){
        this.row = r;
        this.column = c;
        this.pieces = pieces; // array of piece states
        this.allowedMove = allowedMove;
        this.hit = hitPieces;
        this.selected = false;
    }
}

export default TileState;