//--------------------------------------------------------
//-- Extensions - Integration tests
//--------------------------------------------------------
import { given, when, then } from '../../base.gwt';
import { Joi }               from '../../../dist/node';

let extension;
let value;
let result;


//-- Given - Tabula rasa
given.extensionsTabulaRasa = () => {
	given.baseTabulaRasa();

	extension = undefined;
	value     = undefined;
	result    = undefined;
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
