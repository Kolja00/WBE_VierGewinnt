import { render } from "./lib/suiweb.js"

const App = () => [Board, {board: state.board}] 

const Board = ({board}) => {
    let flatBoard = [].concat(...board)
    let fields = flatBoard.map((type, id) => [Field, {type, id}])
    return (["div", {className: "board"}, ...fields])
}

const Field = ({type, id}) => {
    if (type === 0)
        return (["div", { className: "field", id: id }, ["div", { className: "blue piece" }]])
    else if (type === 1)
        return (["div", { className: "field", id: id }, ["div", { className: "red piece" }]])
    else
        return (["div", { className: "field", id: id }])
}

export let state = { board: [
    [ '', '', '', '', '', '', '' ], 
    [ '', '', '', '', '', '', '' ], 
    [ '', '', '', '', '', '', '' ], 
    [ '', '', '', '', '', '', '' ], 
    [ '', '', '', '', '', '', '' ], 
    [ '', '', '', '', '', '', '' ]
    ],
    player: 0
}

export let stateSeq = []

export function showBoard() {
    const app = document.querySelector(".app")
    render([App], app)
    return app
}

export function setInList(list, index, newValue){
    let cpyList  = JSON.parse(JSON.stringify(list))
    cpyList[index] = newValue
    return cpyList
}


export function setInObj(obj, attr, val){
    let cpyObj = Object.assign({}, obj);
    cpyObj[attr] = val
    return cpyObj
}

export function newGame(){ 
    state = {board: [
        [ '', '', '', '', '', '', '' ], 
        [ '', '', '', '', '', '', '' ], 
        [ '', '', '', '', '', '', '' ], 
        [ '', '', '', '', '', '', '' ], 
        [ '', '', '', '', '', '', '' ], 
        [ '', '', '', '', '', '', '' ]
        ],
        player: 0}
    showBoard()
}

export function insertCoin(id){
    let column = id % 7
        for(let i = 5; i >= 0; i--){
            if(state.board[i][column] === ''){
                stateSeq.push(state)                
                let newBoard = setInList(state.board, i, setInList(state.board[i], column, state.player))
                state = setInObj(state,"board",newBoard)
                console.log(state)
                console.log(state.player)
                break
            }
        }
        showBoard()
        return
}