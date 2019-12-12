//--------------------------------------------------------
//-- Absolute path
//--------------------------------------------------------
export const id = 'absolutePath';

export const extension = (joi) => {
	return {
		type: id,
		base: joi.string(),
		messages: {
			error: '"{{#label}}" must be an absolute path'
		},
		validate: (value, helpers) => {
			if (!(/^(?<drive>[a-zA-Z]+:)?\//u).test(value)) {
				return { value, errors: helpers.error('error') };
			}

			return false;
		}
	};
};
