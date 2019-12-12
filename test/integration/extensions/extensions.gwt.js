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
then.resultShouldReturnNoError = () => {
	expect(result).not.toContainKey('error');
};

then.resultShouldReturnAnError = () => {
	expect(result).toContainKey('error');
};


export { given, when, then };
