//--------------------------------------------------------
//-- Absolute path - Integration tests
//--------------------------------------------------------
import { given, when, then } from '../extensions.gwt';
import { id }                from '../../../../dist/node/extensions/string/absolute-path';


describe(`Validate that ${id} extension works`, () => {

	beforeAll(() => {
		given.noException();
		given.noExtension();
		given.noResult();
		given.currentExtension(id);
	});


	//-- Does validate
	[
		['the root',                         '/'],
		['a root directory',                 '/abc'],
		['a absolute directory',             '/abc/xyz'],
		['a absolute file',                  '/abc.xyz'],
		['a Windows root drive',             'a:/'],
		['a Windows root directory',         'a:/bc'],
		['a Windows absolute file',          'a:/bc.xyz'],
		['a Windows multiletter root drive', 'ab:/']
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
		['a Number',             1],
		['a Boolean',            true],
		['an Array',             []],
		['an Object',            {}],
		['an empty string',      ''],
		['a directory',          'abc'],
		['a subdirectory',       'abc/xyz'],
		['a file',               'abc.xyz'],
		['an upper directory',   '../abc.xyz'],
		['an current directory', './abc.xyz']
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
