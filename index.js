console.log("Welcome to tictactoe console game!");

let gameStart = false;

const gameState ={
        board:[[null,null,null]
              ,[null,null,null]
              ,[null,null,null]],
        positions : gameState.board.flat(),
        currentPlayer: "X",
        winner:null,
        gameStatus:"in Progress",

        switchTurns(){
            gameState.currentPlayer === "X"?"O":"X";
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
     }  
}playGame()

function updateGameBoard(){
    console.log(gameState.positions)

}updateGameBoard()

function winningLogic(){
     let conditions = [[0,1,2],[3,4,5],[6,7,8],   //horizontal matching
                       [0,3,6],[1,4,7],[2,5,8],   // vertical matching
                       [0,4,8],[6,4,2]]           //diagonal matching

    // if (positions[0]==="X"&&positions[1]==="X"&&positions[2]=== "X"){
    //     firstPlayer.score += 5;
    //     console.log(`first player scores ${firstPlayer.score} points`)
    // }else if(positions[3]==="X"&&positions[4]==="X"&&positions[5] ==="X"){
    //     firstPlayer.score += 5;
    //     console.log(`first player scores ${firstPlayer.score} points`)
    // }else if(positions[6]==="X"&&positions[7]==="X"&&positions[8] ==="X"){
    //     firstPlayer.score += 5;
    //     console.log(`first player scores ${firstPlayer.score} points`)
    // }else if(positions[0]==="X"&&positions[4]==="X"&&positions[8] ==="X"){
    //     firstPlayer.score += 5;
    //     console.log(`first player scores ${firstPlayer.score} points`)
    // }else if(positions[6]==="X"&&positions[4]==="X"&&positions[2] ==="X"){
    //     firstPlayer.score += 5;
    //     console.log(`first player scores ${firstPlayer.score} points`)
    // }else if(positions[0]==="O"&&positions[1]==="O"&&positions[2] ==="O"){
    //     secondPlayer.score += 5;
    //     console.log(`second player scores ${secondPlayer.score} points`)
    // }else if(positions[3]==="O"&&positions[4]==="O"&&positions[5] ==="O"){
    //     secondPlayer.score += 5;
    //     console.log(`second player scores ${secondPlayer.score} points`)
    // }else if(positions[6]==="O"&&positions[7]==="O"&&positions[8] ==="O"){
    //     secondPlayer.score += 5;
    //     console.log(`second player scores ${secondPlayer.score} points`)
    // }else if(positions[0]==="O"&&positions[4]==="O"&&positions[8] ==="O"){
    //     secondPlayer.score += 5;
    //     console.log(`second player scores ${secondPlayer.score} points`)
    // }else if(positions[6]==="O"&&positions[4]==="O"&&positions[2] ==="O"){
    //     secondPlayer.score += 5;
    //     console.log(`second player scores ${secondPlayer.score} points`)
    // } else(
    
    //     console.log("No one wins this round , good luck on the next round!")
    //  )
}


