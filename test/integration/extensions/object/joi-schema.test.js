//--------------------------------------------------------
//-- joi schema - Integration tests
//--------------------------------------------------------
import Joi                   from '@hapi/joi';
import extensionTests        from '../extension-tests';
import { id }                from '../../../../dist/node/extensions/object/joi-schema';
import { given, when, then } from './joi-schema.gwt';


describe(`Validate that ${id} extension works`, () => {

	//-- Base
	extensionTests({ given, when, then });


	//-- Does validate
	test(`Ensure a joi any schema validates`, () => {
		given.value(Joi.any());
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a joi string schema validates`, () => {
		given.value(Joi.string());
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a joi boolean schema validates`, () => {
		given.value(Joi.boolean());
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a joi object schema validates`, () => {
		given.value(Joi.object());
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});

	test(`Ensure a joi array schema validates`, () => {
		given.value(Joi.array());
		when.extensionCalled();
		then.resultShouldHaveNoError();
	});


	//-- Does not validate
	test(`Ensure a non object does not validate`, () => {
		given.value(true);
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAnObject();
	});

	test(`Ensure a simple object does not validate`, () => {
		given.value({});
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAJoiSchema();
	});

	test(`Ensure a joi instance does not validate`, () => {
		given.value(Joi);
		when.extensionCalled();
		then.resultShouldHaveAnErrorRequiringAJoiSchema();
	});

});
