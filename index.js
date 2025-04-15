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
    console.log("first player has played")
    let random = Math.floor(Math.random()* (positions.length-1));
//    return positions.filter( (row)=> row==="null").map((positions)=> positions[random]=firstPlayer.marker)
for (let choice=0; choice < 1; choice++){
    let randomPosition = positions[random];
       if(randomPosition === "null"){
        positions[random]= firstPlayer.marker ;
            updateGameBoard()
       }
    }
   
};

function secondPlayerPlays(){
    console.log("Second player has played")
    let random = Math.floor(Math.random()* (positions.length-1));
    for (let choice=0; choice < 1; choice++){
       let randomPosition = positions[random];
       if(randomPosition === "null"){
        positions[random]= secondPlayer.marker ;
            updateGameBoard()
       }
        
  }
          }


function playGame(){
  if(gameStart === true) {
    // firstPlayerPlays();
    // if(firstPlayerPlays){
    //     secondPlayerPlays()
    // }
    // winningLogic()
    setTimeout(() => {
      firstPlayerPlays() 
      winningLogic() 
    }, 3000).then(secondPlayerPlays())
}}playGame()

function updateGameBoard(){
    console.log(positions)

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
    } else(
    
        console.log("No one wins this round , good luck on the next round!")
     )
}

