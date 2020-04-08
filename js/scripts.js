




var Chee = new player(chee);
Chee.addScore();
var chris = new player(Chris);
Chris.addScore();

//player 1 scores var
function player (id){
  this.totalScore = 0;
  this.turnScore = 0; 
  this.id = id;
}
player.prototype.addScore = function(){
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}

var switchTurns(){
  "(ThisTurn'sPlayer).addScore()"
  "Switch Active Player's turn"

} 

//##################################################################

$(document).ready(function() {

  $("#roll").click()
});