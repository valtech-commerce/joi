//--------------------------------------------------------
//-- Variable name
//--------------------------------------------------------
import isVarName from 'is-var-name';


export const id = 'variableName';

export const extension = (joi) => {
	return {
		type: id,
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
