//--------------------------------------------------------
//-- Variable name
//--------------------------------------------------------
import isVarName from 'is-var-name';


export default (joi) => {
	return {
		type: 'variableName',
		base: joi.string(),
		messages: {
			error: '"{{#label}}" must be a valid JavaScript identifier name'
		},
		validate: (value, helpers) => {
			if (!isVarName(value)) {
				return { value, errors: helpers.error('error') };
			}

			return false;
		}
	};
};
