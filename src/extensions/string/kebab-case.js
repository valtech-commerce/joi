//--------------------------------------------------------
//-- kebab-case
//--------------------------------------------------------
export const id = 'kebabCase';

export const extension = (joi) => {
	return {
		type: id,
		base: joi.string(),
		messages: {
			error: '{{#label}} must be kebab-case'
		},
		validate: (value, helpers) => {
			if (!(/^(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*$/u).test(value)) {
				return { value, errors: helpers.error('error') };
			}

			return false;
		}
	};
};
