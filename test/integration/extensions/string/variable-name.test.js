//--------------------------------------------------------
//-- Variable name - Integration tests
//--------------------------------------------------------
import extensionTests        from '../extension-tests';
import { id }                from '../../../../dist/node/extensions/string/variable-name';
import { given, when, then } from './variable-name.gwt';


describe(`Validate that ${id} extension works`, () => {

	//-- Base
	extensionTests({ given, when, then });


	//-- Does validate
	test(`Ensure a lowercase validates`, () => {
		given.value('abc');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a camelCase validates`, () => {
		given.value('aBc');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a classname validates`, () => {
		given.value('AbC');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a private validates`, () => {
		given.value('_a_b_c_');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure an alphanumeric validates`, () => {
		given.value('a1b2c3');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});


	//-- Does not validate
	test(`Ensure a non-string does not validate`, () => {
		given.value(true);
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAString();
	});

	test(`Ensure an empty string does not validate`, () => {
		given.value('');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringNotEmpty();
	});

	test(`Ensure a whitespace does not validate`, () => {
		given.value(' a\t');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAVariableName();
	});

	test(`Ensure a newline does not validate`, () => {
		given.value('a\r\n');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAVariableName();
	});

	test(`Ensure a statement does not validate`, () => {
		given.value('a;');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAVariableName();
	});

	test(`Ensure a reserved word does not validate`, () => {
		given.value('class');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAVariableName();
	});

	test(`Ensure a kebab-case does not validate`, () => {
		given.value('a-b-c');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAVariableName();
	});

	test(`Ensure a number starting does not validate`, () => {
		given.value('1abc');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAVariableName();
	});

});
