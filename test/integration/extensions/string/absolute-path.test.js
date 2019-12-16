//--------------------------------------------------------
//-- Absolute path - Integration tests
//--------------------------------------------------------
import extensionTests        from '../extension-tests';
import { id }                from '../../../../dist/node/extensions/string/absolute-path';
import { given, when, then } from './absolute-path.gwt';


describe(`Validate that ${id} extension works`, () => {

	//-- Base
	extensionTests({ given, when, then });


	//-- Does validate
	test(`Ensure the root validates`, () => {
		given.value('/');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a root directory validates`, () => {
		given.value('/abc');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a absolute directory validates`, () => {
		given.value('/abc/xyz');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a absolute file validates`, () => {
		given.value('/abc.xyz');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a Windows root drive validates`, () => {
		given.value('a:/');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a Windows root directory validates`, () => {
		given.value('a:/bc');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a Windows absolute file validates`, () => {
		given.value('a:/bc.xyz');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a Windows multiletter root drive validates`, () => {
		given.value('ab:/');
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});


	//-- Does not validate
	test(`Ensure a non string does not validate`, () => {
		given.value(true);
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAString();
	});

	test(`Ensure an empty string does not validate`, () => {
		given.value('');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringNotEmpty();
	});

	test(`Ensure a directory does not validate`, () => {
		given.value('abc');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAnAbsolutePath();
	});

	test(`Ensure a subdirectory does not validate`, () => {
		given.value('abc/xyz');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAnAbsolutePath();
	});

	test(`Ensure a file does not validate`, () => {
		given.value('abc.xyz');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAnAbsolutePath();
	});

	test(`Ensure an upper directory does not validate`, () => {
		given.value('../abc.xyz');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAnAbsolutePath();
	});

	test(`Ensure an current directory does not validate`, () => {
		given.value('./abc.xyz');
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAnAbsolutePath();
	});

});
