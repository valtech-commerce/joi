//--------------------------------------------------------
//-- Validate argument - Integration tests
//--------------------------------------------------------
import Joi                   from '@hapi/joi';
import { given, when, then } from './validate-argument.gwt';


describe(`Validate that validateArgument works`, () => {

	beforeEach(() => {
		given.noException();
		given.noParameters();
	});


	//-- Does validate
	test(`Ensure a classic call validates`, () => {
		given.label('abc');
		given.value(true);
		given.schema(Joi.any());
		when.methodCalled();
		then.shouldNotHaveThrown();
	});

	test(`Ensure no value validates`, () => {
		given.label('abc');
		given.schema(Joi.any());
		when.methodCalled();
		then.shouldNotHaveThrown();
	});




	//-- Does not validate
	test(`Ensure no parameters does not validate`, () => {
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('"label" is required');
	});

	test(`Ensure a numeric label does not validate`, () => {
		given.label(1);
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('"label" must be a string');
	});

	test(`Ensure an empty label does not validate`, () => {
		given.label('');
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('"label" is not allowed to be empty');
	});

	test(`Ensure an empty label does not validate`, () => {
		given.label('?');
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('"label" must be a valid JavaScript identifier name');
	});

	test(`Ensure no schema does not validate`, () => {
		given.label('xyz');
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('"schema" is required');
	});

	test(`Ensure an invalid schema does not validate`, () => {
		given.label('xyz');
		given.schema({});
		when.methodCalled();
		then.shouldHaveThrownMessageContaining('"schema" must be an joi schema');
	});

});
