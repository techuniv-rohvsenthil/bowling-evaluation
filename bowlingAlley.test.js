const bowlingGame = require('./bowlingAlley');

describe('the bowlingGame function', () => {

	it('should return number', () => {
		const result = bowlingGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
		expect(typeof result).toBe('number');
	});

	// it('should contain a function: roll which return a nothing', () => {
	// 	const result = bowlingGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
	// 	console.log(result);
	// 	expect(typeof result.roll(3)).toBe('undefined');
	// });
    
	// it('should contain a function: score which return a number', () => {
	// 	const result = bowlingGame([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
	// 	expect(typeof result.score()).toBe('number');
	// });
    

});