//--------------------------------------------------------
//-- joi schema
//--------------------------------------------------------
export const id = 'joiSchema';

export const extension = (joi) => {
	return {
		type: id,
		base: joi.object(),
		messages: {
			error: '{{#label}} must be an joi schema'
		},
		validate: (value, helpers) => {
			if (!joi.isSchema(value)) {
				return { value, errors: helpers.error('error') };
			}

			return false;
		}
	};
};
