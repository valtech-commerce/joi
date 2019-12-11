//--------------------------------------------------------
//-- joi schema - Integration tests
//--------------------------------------------------------
import Joi                   from '@hapi/joi';
import { given, when, then } from '../extensions.gwt';
import { id }                from '../../../../dist/node/extensions/object/joi-schema';


describe(`Validate that ${id} extension works`, () => {

	beforeAll(() => {
		given.extensionsTabulaRasa();
		given.currentExtension(id);
	});


	//-- Does validate
	[
		['a joi any schema',     Joi.any()],
		['a joi string schema',  Joi.string()],
		['a joi boolean schema', Joi.boolean()],
		['a joi object schema',  Joi.object()],
		['a joi array schema',   Joi.array()]
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
		['a simple object', {}],
		['an array',        []],
		['a boolean',       true],
		['a number',        1],
		['a joi instance',  Joi]
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
