let totalScore = 0;

function roll(pinsKnocked){
	totalScore += pinsKnocked;
}

function score(){
	return totalScore;
}

function bowlingGame(inputThrows){
	for(let i =0; i<inputThrows.length; i++){
		roll(inputThrows[i]);
	}
    
	return score();
}

module.exports = bowlingGame;