import { connect4Winner } from "./connect4-winner.js"
import * as board from "./showBoard.js"
import * as connectionHandler from "./connectionHandler.js"

window.addEventListener("load",() => {
    board.showBoard()
})

window.addEventListener("click", e => { 
    let target = e.target

    if(target.className == "red piece" || target.className == "blue piece"){
        target = target.parentNode
    }

    if (target.className == "field") { 
        board.insertCoin(target.id)
        board.state.player = (board.state.player + 1) % 2

        if (connect4Winner("r", board.state.board) || connect4Winner("b", board.state.board)){
            setTimeout(function() { 
                alert("Player: " + board.state.player + " won the game!");
                board.newGame();
                board.showBoard()
            },10);
        }
    }
    
}) 

document.getElementById("newGame").onclick = board.newGame

document.getElementById("loadGameServer").onclick = async()=> {
    Object.assign(board.state, await connectionHandler.loadStateServer())
    board.showBoard()
}
document.getElementById("saveGameServer").onclick = ()=> connectionHandler.saveStateServer(board.state)

document.getElementById("loadGame").onclick = ()=> {
    Object.assign(board.state, connectionHandler.loadState())
    board.showBoard()
}

document.getElementById("undo").onclick = ()=> {
    Object.assign(board.state, board.stateSeq.pop())
    board.showBoard()
}

document.getElementById("saveGame").onclick = ()=> connectionHandler.saveState(board.state)
