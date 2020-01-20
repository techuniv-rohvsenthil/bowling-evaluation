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
    
    

    

});