let totalScore = 0;
let totalThrows = 20;

function roll(pinsKnocked){
	totalScore = totalScore + pinsKnocked;
}

function score(){
	let finalScore = totalScore;
	totalScore = 0;
	return finalScore;
}

function bowlingGame(inputThrows){
	for(let i = 0; i < totalThrows; i++){

		if(inputThrows[i] == 10){
			totalThrows--;
			roll(inputThrows[i]);
			roll.call(null, inputThrows[i+1]);
			roll.call(null, inputThrows[i+2]);
		}

		else{
			roll(inputThrows[i]);
		}
	}


	return score();
}

module.exports = bowlingGame;