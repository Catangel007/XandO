
let gameStart = false;

const gameBoard ={
    board:[[null,null,null]
              ,[null,null,null]
              ,[null,null,null]],
}

const firstPlayer={
    marker :"X"
}


const secondPlayer ={
    marker:"O"
}


 let positions = [gameBoard.board[0][0],gameBoard.board[0][1],gameBoard.board[0][2],
                  gameBoard.board[1][0],gameBoard.board[1][1],gameBoard.board[1][2],
                  gameBoard.board[2][0],gameBoard.board[2][1],gameBoard.board[2][2]]

function firstPlayerPlays(){
    let random = Math.floor(Math.random()* positions.length);
    if (positions.value=== null){
    return  positions[random].push(firstPlayer.marker)
    }
    updateGameBoard()
}

function playGame(){
    gameStart === true;
    firstPlayerPlays();
    secondPlayerPlays()
}

function updateGameBoard(){
    console.log(gameBoard.gameBoard)

}

 