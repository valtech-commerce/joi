//--------------------------------------------------------
//-- Absolute path - Unit tests
//--------------------------------------------------------
import helper from '../../helpers/extensions';


helper.testValues(
	'absolutePath',
	[
		['the root',                         '/'],
		['a root directory',                 '/abc'],
		['a absolute directory',             '/abc/xyz'],
		['a absolute file',                  '/abc.xyz'],
		['a Windows root drive',             'a:/'],
		['a Windows root directory',         'a:/bc'],
		['a Windows absolute file',          'a:/bc.xyz'],
		['a Windows multiletter root drive', 'ab:/']
	],
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
);
