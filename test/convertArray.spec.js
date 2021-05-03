import { expect } from 'chai';
import { convertArray } from '../main.js';


describe('convertArray function which accepts an array of integers and returns an array of strings representing the phonetic equivalent of the integer', () => {
	it('returns empty array if the argument is an empty array', (done) => {
		expect(convertArray([])).to.eql([]);
		done();
	});
  it('returns correct result if an argument array includes single digit integeres', (done) => {
		expect(convertArray([2])).to.eql(['Two']);
		expect(convertArray([3, 5, 7, 4])).to.eql([
			'Three',
			'Five',
			'Seven',
			'Four',
		]);
		done();
	});

})
