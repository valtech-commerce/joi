//--------------------------------------------------------
//-- Methods - Integration tests
//--------------------------------------------------------
import * as gwt from '../../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let method;
let parameters;


//-- Given - Reset
given.noMethod = () => {
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
