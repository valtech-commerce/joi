//--------------------------------------------------------
//-- @absolunet/joi
//--------------------------------------------------------
import Joi from '@hapi/joi';

import rawExtensions from './extensions';


//-- Load extensions
const { NewJoi: ExtendedJoi, list: extensions } = Object.entries(rawExtensions)
	.reduce(({ NewJoi, list }, [name, { default: extension }]) => {
		list[name] = extension;

		return { NewJoi: NewJoi.extend(extension), list };
	}, { NewJoi: Joi, list: {} })
;






/**
 * Exports extra methods using joi.
 *
 * @module @absolunet/joi
 */

/**
 * Extended version of joi.
 *
 * @name Joi
 * @type {Joi}
 **/
export { ExtendedJoi as Joi };

/**
 * List of extensions to manually extend Joi.
 *
 * @name extensions
 * @type {object<Function>}
 **/
export { extensions };

/**
 * Validate argument.
 *
 * @function validateArgument
 * @param {string} label - Name of the argument.
 * @param {*} value - Value of the argument.
 * @param {Joi.Schema} schema - {@link https://hapi.dev/family/joi/ Joi schema}.
 **/
export { default as validateArgument } from './methods/validate-argument';

