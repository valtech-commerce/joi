//--------------------------------------------------------
//-- Variable name - Unit tests
//--------------------------------------------------------
import helper from '../../helpers/extensions';


helper.testValues(
	'kebabCase',
	[
		['a no hypen',         'a'],
		['a one hypen',        'a-b'],
		['a multi hypen',      'a-b-c'],
		['a double character', 'ab-bc'],
		['an alphanumeric',    'a-1-c'],
		['an all-dressed',     'a1-2b-c3']
	],
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
);
