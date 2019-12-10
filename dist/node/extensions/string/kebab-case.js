"use strict";

exports.default = void 0;

//--------------------------------------------------------
//-- kebab-case
//--------------------------------------------------------
var _default = joi => {
  return {
    type: 'kebabCase',
    base: joi.string(),
    messages: {
      error: '"{{#label}}" must be kebab-case'
    },
    validate: (value, helpers) => {
      if (!/^(?<start>[a-z][a-z0-9]*)(?<part>-[a-z0-9]+)*$/u.test(value)) {
        return {
          value,
          errors: helpers.error('error')
        };
      }

      return false;
    }
  };
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;