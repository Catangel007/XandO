console.log("Welcome to tictactoe console game!");

let gameStart = false;

const gameBoard ={
        board:[["null","null","null"]
              ,["null","null","null"]
              ,["null","null","null"]],
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


let positions = gameBoard.board.flat();


firstPlayerPlays(){}
secondPlayerPlays(){}


function playGame(){
  if(gameStart === true) {
     firstPlayerPlays();
     winningLogic()
     if(firstPlayerPlays){
         secondPlayerPlays()
         winningLogic()
     }  
}}playGame()

function updateGameBoard(){
    console.log(positions)

}

function winningLogic(){
    if (positions[0]==="X"&&positions[1]==="X"&&positions[2]=== "X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[3]==="X"&&positions[4]==="X"&&positions[5] ==="X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[6]==="X"&&positions[7]==="X"&&positions[8] ==="X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[0]==="X"&&positions[4]==="X"&&positions[8] ==="X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[6]==="X"&&positions[4]==="X"&&positions[2] ==="X"){
        firstPlayer.score += 5;
        console.log(`first player scores ${firstPlayer.score} points`)
    }else if(positions[0]==="O"&&positions[1]==="O"&&positions[2] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[3]==="O"&&positions[4]==="O"&&positions[5] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[6]==="O"&&positions[7]==="O"&&positions[8] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[0]==="O"&&positions[4]==="O"&&positions[8] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    }else if(positions[6]==="O"&&positions[4]==="O"&&positions[2] ==="O"){
        secondPlayer.score += 5;
        console.log(`second player scores ${secondPlayer.score} points`)
    } else(
    
        console.log("No one wins this round , good luck on the next round!")
     )
}

let currentPlayer = "X";
currentPlayer = "X"?"O":"X";