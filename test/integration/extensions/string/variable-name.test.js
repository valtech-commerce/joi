//--------------------------------------------------------
//-- Variable name - Integration tests
//--------------------------------------------------------
import { given, when, then } from '../extensions.gwt';
import { id }                from '../../../../dist/node/extensions/string/variable-name';


describe(`Validate that ${id} extension works`, () => {

	beforeAll(() => {
		given.noException();
		given.noExtension();
		given.noResult();
		given.currentExtension(id);
	});


	//-- Does validate
	[
		['a lowercase',     'abc'],
		['a camelCase',     'aBc'],
		['a classname',     'AbC'],
		['a private',       '_a_b_c_'],
		['an alphanumeric', 'a1b2c3']
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
		['a reserved word',   'class'],
		['a kebab-case',      'a-b-c'],
		['a number starting', '1abc']
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
