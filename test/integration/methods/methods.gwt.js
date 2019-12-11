//--------------------------------------------------------
//-- Methods - Integration tests
//--------------------------------------------------------
import { given, when, then } from '../../base.gwt';

let method;
let parameters;


//-- Given - Tabula rasa
given.methodsTabulaRasa = () => {
	given.baseTabulaRasa();

	method     = undefined;
	parameters = undefined;
};


//-- Given
given.currentMethod = (value) => {
	method = value;
};

given.parameters = (value) => {
	parameters = value;
};


//-- When
when.methodCalled = () => {
	when.attempting(() => {
		method(...parameters);
	});
};


export { given, when, then };
