//--------------------------------------------------------
//-- Kebab case - Integration tests
//--------------------------------------------------------
import extensionTests        from '../extension-tests';
import { id }                from '../../../../dist/node/extensions/string/kebab-case';
import { given, when, then } from './kebab-case.gwt';


describe(`Validate that ${id} extension works`, () => {

	//-- Base
	extensionTests({ given, when, then });


	//-- Does validate
	test(`Ensure a no hypen validates`, () => {
		given.value('a');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a one hypen validates`, () => {
		given.value('a-b');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a multi hypen validates`, () => {
		given.value('a-b-c');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a double character validates`, () => {
		given.value('ab-bc');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure an alphanumeric validates`, () => {
		given.value('a-1-c');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure an all-dressed validates`, () => {
		given.value('a1-2b-c3');
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
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a newline does not validate`, () => {
		given.value('a\r\n');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a statement does not validate`, () => {
		given.value('a;');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a PascalCase does not validate`, () => {
		given.value('Abc');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a camelCase does not validate`, () => {
		given.value('aBc');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a snake_case does not validate`, () => {
		given.value('a_b_c');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a string digit does not validate`, () => {
		given.value('1');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a digit starting does not validate`, () => {
		given.value('1abc');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a hyphen starting does not validate`, () => {
		given.value('-abc');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure a hyphen ending does not validate`, () => {
		given.value('abc-');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

	test(`Ensure an double-hyphen does not validate`, () => {
		given.value('a--b');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAKebabCase();
	});

});
