
let gameStart = false;

const gameBoard ={
    gameBoard:[[null,null,null]
              ,[null,null,null]
              ,[null,null,null]],
}

const firstPlayer={
    key :"X"
}


const secondPlayer ={
    key:"O"
}


function controlFlow(){
   if(gameStart === true) {


    playGame(firstPlayer.key)
   }
}

function playGame(player){
    for(let slab of  gameBoard.gameBoard){
        Math.random(slab)
    }
    
}