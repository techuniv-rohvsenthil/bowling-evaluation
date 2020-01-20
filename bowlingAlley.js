function bowlingGame(inputThrows){
	this.userThrows = inputThrows;
	this.totalScore = 0;
    
    
	// this.roll = function currentRoll(pinsKnocked){
	// 	console.log(pinsKnocked);
	// };
    
	function score(){
		return this.totalScore;
	}
    
	return score();
}

module.exports = bowlingGame;