class C4Board{
    constructor(){
        this.board = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ]
        this.firstTurn = false;
        this.show = function(){
            var x = 0;
            var y = 50;
            var size = 90;
            for(var i = 0; i < this.board.length; i++){
                x = 50;
                for(var j = 0; j < this.board[i].length; j++){
                    if(this.board[i][j] == 1)
                        fill('red');
                    else if(this.board[i][j] == 2)
                        fill('blue');
                    else
                        fill(225);
                    circle(x,y,size);
                    x += 100;
                }
                y += 100;
            }
        }


        this.getCollumn = function(collumn){
            return [this.board[0][collumn],this.board[1][collumn],this.board[2][collumn],this.board[3][collumn],this.board[4][collumn],this.board[5][collumn]]
        }
        this.addPiece = function(collumn){
            this.firstTurn = !this.firstTurn;
            var cllm = this.getCollumn(collumn);
            for(var i = cllm.length - 1; i >= 0; i--){
                if(cllm[i] == 0){
                    this.board[i][collumn] = (this.firstTurn ? 1 : 2); // 1 being the player
                    return true;
                }
            }
            return false;
        }
        this.checkWin = function(){
            // horizontal check
            for(var i = 0; i < this.board.length; i++){
                for(var j = 0; j < this.board[i].length - 3; j ++){
                    if(this.board[i][j] == 1 && this.board[i][j+1] == 1 && this.board[i][j+2] == 1 && this.board[i][j+3] == 1)
                        return 1;
                    else if(this.board[i][j] == 2 && this.board[i][j+1] == 2 && this.board[i][j+2] == 2 && this.board[i][j+3] == 2)
                        return 2;
                }
            }
            // vertical check
            for(var i = 0; i < this.board.length - 3; i++){
                for(var j = 0; j < this.board[i].length; j ++){
                    if(this.board[i][j] == 1 && this.board[i+1][j] == 1 && this.board[i+2][j] == 1 && this.board[i+3][j] == 1)
                        return 1;
                    else if(this.board[i][j] == 2 && this.board[i+1][j] == 2 && this.board[i+2][j] == 2 && this.board[i+3][j] == 2)
                        return 2;
                }
            }
                // ascendingDiagonalCheck 
            for (var i = 3; i < this.board.length; i++){
                for (var j = 0; j < this.board[i].length - 3; j++){
                    if (this.board[i][j] == 1 && this.board[i-1][j+1] == 1 && this.board[i-2][j+2] == 1 && this.board[i-3][j+3] == 1)
                        return 1;
                    if (this.board[i][j] == 2 && this.board[i-1][j+1] == 2 && this.board[i-2][j+2] == 2 && this.board[i-3][j+3] == 2)
                        return 2;
                }
            }
            // descendingDiagonalCheck
            for (var i = 3; i < this.board.length; i++){
                for (var j = 3; j < this.board[i].length; j++){
                    if (this.board[i][j] == 1 && this.board[i-1][j-1] == 1 && this.board[i-2][j-2] == 1 && this.board[i-3][j-3] == 1)
                        return 1;
                    if (this.board[i][j] == 2 && this.board[i-1][j-1] == 2 && this.board[i-2][j-2] == 2 && this.board[i-3][j-3] == 2)
                        return 2;
                }
            }
            return 0; // base case
        }
    }
}