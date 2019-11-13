//--------------------------------------------------------
//-- Validate argument
//--------------------------------------------------------
import Joi, { ValidationError } from '@hapi/joi';
import joiSchemaExtension       from '../extensions/object/joi-schema';
import variableNameExtension    from '../extensions/string/variable-name';


const validateArgument = (label, value, schema) => {
	const { error } = Joi.object({ [label]: schema }).validate({ [label]: value });

	if (error) {
		throw new ValidationError(error.annotate(), error.details, error._original);
	}
};

const schemas = {
	label:  Joi.extend(variableNameExtension).variableName().required(),
	value:  Joi.any().required(),
	schema: Joi.extend(joiSchemaExtension).joiSchema().required()
};






export default (label, value, schema) => {
	validateArgument('label',  label,  schemas.label);
	validateArgument('value',  value,  schemas.value);
	validateArgument('schema', schema, schemas.schema);

	return validateArgument(label, value, schema);
};
