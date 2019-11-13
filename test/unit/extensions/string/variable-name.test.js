//--------------------------------------------------------
//-- Variable name - Unit tests
//--------------------------------------------------------
import helper from '../../helpers/extensions';


// eslint-disable-next-line function-paren-newline
helper.testValues(
	'variableName',
	[
		['a lowercase',     'abc'],
		['a camelCase',     'aBc'],
		['a classname',     'AbC'],
		['a private',       '_a_b_c_'],
		['an alphanumeric', 'a1b2c3']
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
		['a reserved word',   'class'],
		['a kebab-case',      'a-b-c'],
		['a number starting', '1abc']
	]
);  // eslint-disable-line function-paren-newline
