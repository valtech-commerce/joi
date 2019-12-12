//--------------------------------------------------------
//-- Validate argument - Integration tests
//--------------------------------------------------------
import Joi                   from '@hapi/joi';
import { validateArgument }  from '../../../dist/node';
import { given, when, then } from './methods.gwt';


describe(`Validate that validateArgument works`, () => {

	beforeAll(() => {
		given.noException();
		given.noMethod();
		given.currentMethod(validateArgument);
	});


	//-- Does validate
	[
		['a classic call',     ['abc', true, Joi.any()]],
		['an undefined value', ['abc', undefined, Joi.any()]]
	]
		.forEach(([description, parameters]) => {

			test(`Ensure ${description} validates`, () => {
				given.parameters(parameters);
				when.methodCalled();
				then.shouldNotHaveThrown();
			});

		})
	;


	//-- Does not validate
	[
		['an undefined label',  []],
		['a numeric label',     [1]],
		['an empty label',      ['']],
		['an invalid label',    ['?']],
		['an undefined schema', ['abc', true]],
		['an invalid schema',   ['abc', true, {}]]
	]
		.forEach(([description, parameters]) => {

			test(`Ensure ${description} does not validate`, () => {
				given.parameters(parameters);
				when.methodCalled();
				then.shouldHaveThrown();
			});

		})
	;

});
