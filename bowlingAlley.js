let totalScore = 0;
let totalThrows = 20;
let set = 0;

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

		if(set == 2){
			set = 1;
		}
		else{
			set++;
		}

		// if(set == 2 && (inputThrows[i-1]+inputThrows[i] ==10)){
		// 	continue;
		// }


		if(inputThrows[i] == 10){
			if(set == 1){
				set++;
				totalThrows--;
			}
			roll(inputThrows[i]);
			roll.call(null, inputThrows[i+1]);
			roll.call(null, inputThrows[i+2]);
			continue;
		}

		
		roll(inputThrows[i]);
		
	}


	return score();
}

module.exports = bowlingGame;