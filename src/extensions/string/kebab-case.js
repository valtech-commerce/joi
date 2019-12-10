//--------------------------------------------------------
//-- kebab-case
//--------------------------------------------------------
export default (joi) => {
	return {
		type: 'kebabCase',
		base: joi.string(),
		messages: {
			error: '"{{#label}}" must be kebab-case'
		},
		validate: (value, helpers) => {
			if (!(/^(?<start>[a-z][a-z0-9]*)(?<part>-[a-z0-9]+)*$/u).test(value)) {
				return { value, errors: helpers.error('error') };
			}

			return false;
		}
	};
};
