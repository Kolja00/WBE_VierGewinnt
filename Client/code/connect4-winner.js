function connect4Winner(type, board) {
    let count = 0;
    //vertical
    for(let j = 0; j < 7; j++) {
        count = 0
        for(let i = 0; i < 3; i++) {
            if(board[i][j] == type && board[i+1][j] == type && board[i+2][j] == type && board[i+3][j] == type){
                return true;             
            }
        }
    }
    //horizontal
    for(let i = 0; i < 6; i++) {
        count = 0;
        for(let j = 0; j < 4; j++) {
            if(board[i][j] == type && board[i][j+1] == type && board[i][j+2] == type && board[i][j+3] == type){
                return true;             
            }
        }
    }
    for (let i = 5; i >= 3; i--) {
        for (let j = 0; j <= 3; j++) {
            if(board[i][j] == type && board[i-1][j+1] == type && board[i-2][j+2] == type && board[i-3][j+3] == type){
                return true;             
            }
        }
    }

    for (let i = 5; i > 3; i--) {
        for (let j = 6; j > 3; j--) {
            if(board[i][j] == type && board[i-1][j-1] == type && board[i-2][j-2] == type && board[i-3][j-3] == type){
                return true;             
            }
        }
    }
    return false
}

export { connect4Winner }