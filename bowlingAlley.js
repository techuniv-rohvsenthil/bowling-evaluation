let totalScore = 0;
let totalThrows = 20;

function roll(pinsKnocked){
	totalScore = totalScore + pinsKnocked;
}

function score(){
	let finalScore = totalScore;
	totalScore = 0; //reseting score so it doesn't affect later test cases
	return finalScore;
}

function bowlingGame(inputThrows){

	let set = 0; //Variable added to keep track of spares (10 slots -> each slot with 2 sets)
	
	for(let i = 0; i < totalThrows; i++){

		//set is updated with each throw
		if(set == 2){set = 1;}
		else{set++;}

		//if the throw is a spare
		if(set == 2){
			if (inputThrows[i-1]+inputThrows[i] == 10){
				roll(inputThrows[i]);
				roll.call(null, inputThrows[i+1]); //add score of next throw to current
				continue;
			}

		}

		//if the throw is a strike
		if(set == 1 && inputThrows[i] == 10){
			
			set++; //no more pins in next set, hence skips next set in slot
			totalThrows--; //no more pins in next set, hence skips throw in next set in slot
		
			roll(inputThrows[i]);
			roll.call(null, inputThrows[i+1]);
			roll.call(null, inputThrows[i+2]); //add scores of next two throws to current
			continue;
		}

		
		roll(inputThrows[i]);
		
	}

	return score();
}

module.exports = bowlingGame;