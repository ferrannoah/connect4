var board;

function setup(){
    createCanvas(700, 600); // connect 4 is 7 w by 6 h
    board = new C4Board()
}

function draw(){
    background(0);
    board.show();
}

function mouseClicked(){
    board.addPiece(parseInt(mouseX/100));
    if(board.checkWin() != 0)
        console.log("Player " + board.checkWin() + " Wins!");
}