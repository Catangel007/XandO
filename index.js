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


//   //[gameBoard.board[0][0],gameBoard.board[0][1],gameBoard.board[0][2],
//                   gameBoard.board[1][0],gameBoard.board[1][1],gameBoard.board[1][2],
//                   gameBoard.board[2][0],gameBoard.board[2][1],gameBoard.board[2][2]]

let positions = gameBoard.board.flat();
function firstPlayerPlays(){
    console.log("first player plays X")
    let random = Math.floor(Math.random()* (positions.length))
  // return positions.filter( (row)=> row==="null").map((positions)=> positions[random]=firstPlayer.marker)
for (let choice=0; choice < 1; choice++){
    let randomPosition = positions[random];
       if(randomPosition === "null"){
        positions[random]= firstPlayer.marker ;
            updateGameBoard()
       }else{
        let secondRandom = positions[random];
        if(secondRandom === "null"){
            positions[random]= firstPlayer.marker ;
                updateGameBoard()}
       }
    }
   

};

function secondPlayerPlays(){
    console.log("Second player plays O")
    let random = Math.floor(Math.random()* (positions.length))
    for (let choice=0; choice < 1; choice++){
       let randomPosition = positions[random];
       if(randomPosition === "null"){
        positions[random]= secondPlayer.marker ;
            updateGameBoard()
       }else{
        choice <=1; choice++;
       }   
  }}


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