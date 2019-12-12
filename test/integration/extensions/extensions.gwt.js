//--------------------------------------------------------
//-- Extensions - Integration tests
//--------------------------------------------------------
import { Joi }  from '../../../dist/node';
import * as gwt from '../../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let extension;
let value;
let result;


//-- Given - Reset
given.noExtension = () => {
	extension = undefined;
	value     = undefined;
};

given.noResult = () => {
	result = undefined;
};


//-- Given
given.currentExtension = (parameter) => {
	extension = parameter;
};

given.value = (parameter) => {
	value = parameter;
};


//-- When
when.extensionCalled = () => {
	result = Joi[extension]().validate(value);
};


//-- Then
then.resultShouldHaveNoError = () => {
	expect(result).not.toContainKey('error');
};

then.resultShouldHaveAnErrorContaining = (text) => {
	expect(result.error.details).toBeArrayOfSize(1);
	expect(result.error.details[0].message).toContain(text);
};

then.resultShouldHaveAnErrorRequiringNotEmpty = () => {
	then.resultShouldHaveAnErrorContaining('"value" is not allowed to be empty');
};

then.resultShouldHaveAnErrorRequiringAnObject = () => {
	then.resultShouldHaveAnErrorContaining('"value" must be of type object');
};

then.resultShouldHaveAnErrorRequiringAString = () => {
	then.resultShouldHaveAnErrorContaining('"value" must be a string');
};

then.resultShouldHaveAnErrorRequiringAJoiSchema = () => {
	then.resultShouldHaveAnErrorContaining('"value" must be an joi schema');
};

then.resultShouldHaveAnErrorRequiringAnAbsolutePath = () => {
	then.resultShouldHaveAnErrorContaining('"value" must be an absolute path');
};

then.resultShouldHaveAnErrorRequiringAKebabCase = () => {
	then.resultShouldHaveAnErrorContaining('"value" must be kebab-case');
};

then.resultShouldHaveAnErrorRequiringAVariableName = () => {
	then.resultShouldHaveAnErrorContaining('"value" must be a valid JavaScript identifier name');
};


export { given, when, then };
