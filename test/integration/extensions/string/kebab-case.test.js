//--------------------------------------------------------
//-- Kebab case - Integration tests
//--------------------------------------------------------
import { given, when, then } from '../extensions.gwt';
import { id }                from '../../../../dist/node/extensions/string/kebab-case';


describe(`Validate that ${id} extension works`, () => {

	beforeAll(() => {
		given.extensionsTabulaRasa();
		given.currentExtension(id);
	});


	//-- Does validate
	[
		['a no hypen',         'a'],
		['a one hypen',        'a-b'],
		['a multi hypen',      'a-b-c'],
		['a double character', 'ab-bc'],
		['an alphanumeric',    'a-1-c'],
		['an all-dressed',     'a1-2b-c3']
	]
		.forEach(([description, value]) => {

			test(`Ensure ${description} validates`, () => {
				given.value(value);
				when.extensionCalled();
				then.resultShouldReturnNoError();
			});

		})
	;


	//-- Does not validate
	[
		['a Number',          1],
		['a Boolean',         true],
		['an Array',          []],
		['an Object',         {}],
		['an empty string',   ''],
		['a whitespace',      ' a\t'],
		['a newline',         'a\r\n'],
		['a statement',       'a;'],
		['a PascalCase',      'Abc'],
		['a camelCase',       'aBc'],
		['a snake_case',      'a_b_c'],
		['a string digit',    '1'],
		['a digit starting',  '1abc'],
		['a hyphen starting', '-abc'],
		['a hyphen ending',   'abc-'],
		['an double-hyphen',  'a--b']
	]
		.forEach(([description, value]) => {

			test(`Ensure ${description} does not validate`, () => {
				given.value(value);
				when.extensionCalled();
				then.resultShouldReturnAnError();
			});

		})
	;

});
