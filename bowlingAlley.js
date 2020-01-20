let totalScore = 0;

function roll(pinsKnocked){
	totalScore = totalScore + pinsKnocked;
}

function score(){
	let finalScore = totalScore;
	totalScore = 0;
	return finalScore;
}

function bowlingGame(inputThrows){
	for(let i = 0; i < inputThrows.length; i++){
		roll(inputThrows[i]);
	}


	return score();
}

module.exports = bowlingGame;