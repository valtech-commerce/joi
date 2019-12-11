//--------------------------------------------------------
//-- joi schema - Unit tests
//--------------------------------------------------------
import Joi    from '@hapi/joi';
import helper from '../../helpers/extensions';


helper.testValues(
	'joiSchema',
	[
		['a joi any schema',     Joi.any()],
		['a joi string schema',  Joi.string()],
		['a joi boolean schema', Joi.boolean()],
		['a joi object schema',  Joi.object()],
		['a joi array schema',   Joi.array()]
	],
	[
		['a simple object', {}],
		['an array',        []],
		['a boolean',       true],
		['a number',        1],
		['a joi instance',  Joi]
	]
);
