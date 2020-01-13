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
			const valid = value.split('.').every((item) => {
				return isVarName(item);
			});

			if (!valid) {
				return { value, errors: helpers.error('error') };
			}

			return false;
		}
	};
};
