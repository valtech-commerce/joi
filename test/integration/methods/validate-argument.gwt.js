//--------------------------------------------------------
//-- Methods - Integration tests
//--------------------------------------------------------
import { validateArgument } from '../../../dist/node';
import * as gwt             from '../../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let label;
let value;
let schema;


//-- Given - Reset
given.noParameters = () => {
	label  = undefined;
	value  = undefined;
	schema = undefined;
};


//-- Given
given.label = (parameter) => {
	label = parameter;
};

given.value = (parameter) => {
	value = parameter;
};

given.schema = (parameter) => {
	schema = parameter;
};


//-- When
when.methodCalled = () => {
	when.attempting(() => {
		validateArgument(label, value, schema);
	});
};


export { given, when, then };
