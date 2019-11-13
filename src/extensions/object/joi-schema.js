//--------------------------------------------------------
//-- joi schema
//--------------------------------------------------------

export default (joi) => {
	return {
		type: 'joiSchema',
		base: joi.object(),
		messages: {
			error: '"{{#label}}" must be an joi schema'
		},
		validate: (value, helpers) => {
			if (!joi.isSchema(value)) {
				return { value, errors: helpers.error('error') };
			}

			return false;
		}
	};
};
