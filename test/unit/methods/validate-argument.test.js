//--------------------------------------------------------
//-- Validate argument - Unit tests
//--------------------------------------------------------
import Joi                  from '@hapi/joi';
import { validateArgument } from '../../../dist/node';


describe(`Validate that validateArgument works`, () => {

	//-- Does validate
	[
		['a classic call', ['abc', true, Joi.any()]]
	]
		.forEach(([description, parameters]) => {
			test(`Ensure ${description} validates`, () => {
				expect(() => {
					validateArgument(...parameters);
				}).not.toThrow();
			});
		})
	;


	//-- Does not validate
	[
		['an undefined label',  []],
		['a numeric label',     [1]],
		['an empty label',      ['']],
		['an invalid label',    ['?']],
		['an undefined value',  ['abc']],
		['an undefined schema', ['abc', true]],
		['an invalid schema',   ['abc', true, {}]]
	]
		.forEach(([description, parameters]) => {
			test(`Ensure ${description} does not validate`, () => {
				expect(() => {
					validateArgument(...parameters);
				}).toThrow();
			});
		})
	;

});
