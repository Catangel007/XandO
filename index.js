console.log("Welcome to tictactoe console game!");

let gameStart = false;

const gameState ={
        board:[[null,null,null]
              ,[null,null,null]
              ,[null,null,null]],
        positions : gameState.board.flat(),
        currentPlayer: "X",
        gameStatus:"in Progress",

        switchTurns(){
            gameState.currentPlayer === "X"?"O":"X";
            return;
        }
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




// play game with our objects.
function playGame(){
  if(gameStart === true) {
    //duh
   const winner= winningLogic(gameState.board);
   if(winner === "X"){
    console.log(`${firstPlayer.name} wins`)
   } else if(winner === "O"){
    console.log(`${secondPlayer.name} wins`)
   } else if(winner === "tie"){
    console.log(`it is a tie.`)
   }else{
    console.log("Game in Progress")
   }
     }  
}playGame()

function updateGameBoard(){
    console.log(gameState.positions)

}updateGameBoard()

function winningLogic(board){
     let conditions = [[0,1,2],[3,4,5],[6,7,8],   //horizontal matching
                       [0,3,6],[1,4,7],[2,5,8],   // vertical matching
                       [0,4,8],[6,4,2]]           //diagonal matching

    for (let condition of conditions){
    const [a,b,c] = condition;
    }
    if (board[a]&&board[a]=== board[b]&& board[a] === board[c]){
    return board[a];
    }
    if (!board.includes(null)){
    return "tie";
    }
    return null;
    
}


