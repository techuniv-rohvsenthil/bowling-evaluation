const bowlingGame = require('./bowlingAlley');


describe('the bowlingGame function', () => {

	it('should return number', () => {
		const result = bowlingGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
		expect(typeof result).toBe('number');
	});
    
	it('should return the sum of throws when there are no spares/strikes', () => {
		const result = bowlingGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
		expect(result).toBe(90);
	});

	it('should return the expected throw when a strike is made: add the next two throw scores to current score', () => {
		const result = bowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
		expect(result).toBe(30);
	});

	//different test case: when strike is thrown not in the end
	it('should return the expected throw when a strike is made: add the next two throw scores to current score', () => {
		const result = bowlingGame([0, 0, 10, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		expect(result).toBe(20);
	});
    
    

    

});