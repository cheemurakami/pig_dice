//player constructor
function player (id){
  this.totalScore = 0; //permanent
  this.turnScore = 0;  //temporary 
  this.id = id;
} 
//modifications to players
player.prototype.addScore = function(){
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}


//  List Of Players = [First Player, Second Player]
var playerTurn = 0; 
var allPlayers = [];
allPlayers.push(new player(0))
allPlayers.push(new player(1))

// referee neutral
function switchTurns() {
  if (playerTurn === 0){
    allPlayers[0].addScore();
    if (allPlayers[0].totalScore >= 100) {
      console.log("allPlayer[0], You won the game!")
    }
    playerTurn = 1;
  }
  
  else {
    allPlayers[1].addScore();
    if (allPlayers[1].totalScore >= 100) {
      console.log("allPlayer[1], You won the game!")
    }
    playerTurn = 0;
  }
  displayScore();
  
} 


//   ^ End Your Turn ^
//################################################################
//   V Roll Your Dice V

function diceRoll() {
  var random = Math.floor(Math.random() * 6) + 1;
  console.log(random)
  if (random == 1){
    allPlayers[playerTurn].turnScore = 0;
    switchTurns();
  }
  else {
    allPlayers[playerTurn].turnScore += random; //YOU update the score
  
//return random; //give ME the number, and I'll do something with it somewhere else
  }
  displayScore();
}

function displayScore() {
  $("#score").html("Player: " + playerTurn + " Turn Score: " + allPlayers[playerTurn].turnScore);
  $("#total-score").html("Player: " + playerTurn + " Total Score: " + allPlayers[playerTurn].totalScore);
}


//##################################################################

$(document).ready(function() {
  $("#roll").click(function(){
    diceRoll();
  });
  $("#pass").click(function(){
    switchTurns();
  });
  
  
  
});