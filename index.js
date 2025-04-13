
let gameStart = false;

const gameBoard ={
        board:[[null,null,null]
              ,[null,null,null]
              ,[null,null,null]],
}

const firstPlayer={
    marker :"X",
    score:0,
    name:"first player",
}


const secondPlayer ={
    marker:"O",
    score:0,
    name:"second player",
}


 let positions = [gameBoard.board[0][0],gameBoard.board[0][1],gameBoard.board[0][2],
                  gameBoard.board[1][0],gameBoard.board[1][1],gameBoard.board[1][2],
                  gameBoard.board[2][0],gameBoard.board[2][1],gameBoard.board[2][2]]

function firstPlayerPlays(){
    let random = Math.floor(Math.random()* positions.length);
    if (positions.value=== null){
    return  positions[random]=firstPlayer.marker;
    }
    updateGameBoard()
}

function secondPlayerPlays(){
    let random = Math.floor(Math.random()* positions.length);
    if (positions.value=== null){
    return  positions[random]=secondPlayer.marker;
    }
    updateGameBoard()
}
function playGame(){
  if(gameStart === true) {
    firstPlayerPlays();
    if(firstPlayerPlays){
        secondPlayerPlays()
    }
    winningLogic()
}}playGame()

function updateGameBoard(){
    console.log(gameBoard.board)

}

function winningLogic(){
    if (positions[0]&&positions[1]&&positions[2]=== "X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[3]&&positions[4]&&positions[5] ==="X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[6]&&positions[7]&&positions[8] ==="X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[0]&&positions[4]&&positions[8] ==="X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[6]&&positions[4]&&positions[2] ==="X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[0]&&positions[1]&&positions[2] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[3]&&positions[4]&&positions[5] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[6]&&positions[7]&&positions[8] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[0]&&positions[4]&&positions[8] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[6]&&positions[4]&&positions[2] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[3]&&positions[4]&&positions[5] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else(
      //  nextRound()
    )
}

