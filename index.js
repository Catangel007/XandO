console.log("Welcome to tictactoe console game!");

let gameStart = false;

const gameState ={
        board:[[null,null,null]
              ,[null,null,null]
              ,[null,null,null]],
        
        currentPlayer: "X",
        gameStatus:"in Progress",

        switchTurns(){
           this.currentPlayer = this.currentPlayer === "X"?"O":"X";   
        }
}
let positions = gameState.board.flat();

const firstPlayer = {
    marker :"X",
    score:0,
    name:"first player",
}


const secondPlayer = {
    marker:"O",
    score:0,
    name:"second player",
}


let winner= winningLogic(positions);

// play game with our objects.
function playGame(){

       if(gameStart === true){

        let gameOver = isGameOver();
        let board = positions; // Assuming positions is defined elsewhere
        let current = gameState.currentPlayer;
        
        // Filter for empty positions
        let emptyPositions = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null || board[i] === undefined) {
                emptyPositions.push(i);
            }
        }
        
        // Check if there are any empty positions
        if (emptyPositions.length === 0) {
           
            return board; // Board is full
        }
        
        // Select random empty position
        let randomIndex = Math.floor(Math.random() * emptyPositions.length);
        let randomPosition = emptyPositions[randomIndex];
        
        if (current === "X") {
            board[randomPosition] = firstPlayer.marker;
            gameState.switchTurns();
            updateGameBoard();
        } else if (current === "O") {
            board[randomPosition] = secondPlayer.marker;
            gameState.switchTurns();
            updateGameBoard();
        }
        
        function sayWinner(){
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
    
    sayWinner();

      if (gameOver === true){
        reset();
      } else{
        playGame()
      }

        return board;
    } 
    return null; 
 }
     playGame()

function updateGameBoard(){
    console.log(positions)
    console.log(` the current player is ${gameState.currentPlayer}.`)
}





function winningLogic(board){
    
     let conditions = [[0,1,2],[3,4,5],[6,7,8],   //horizontal matching
                       [0,3,6],[1,4,7],[2,5,8],   // vertical matching
                       [0,4,8],[6,4,2]]           //diagonal matching

    for (let condition of conditions){
        const [a,b,c] = condition;
    
    if (board[a]&&board[a]=== board[b]&& board[a] === board[c]){
    return board[a];
    }
    if (!board.includes(null)){
    return "tie";
    }
   
}


    
return null;
}

function isGameOver(){
    
    // checking each tab to see if it does not have null.
    positions.every(position => {
        position !== null;
        reset();
        return true;
    });

    return false;
}

function reset(){
  
    gameState.board = [[null,null,null],
                       [null,null,null],
                       [null,null,null]]
    gameStart = true;
         return  gameStart;            
                      
}