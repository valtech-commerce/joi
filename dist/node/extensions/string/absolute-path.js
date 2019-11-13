"use strict";

exports.default = void 0;

//--------------------------------------------------------
//-- Absolute path
//--------------------------------------------------------
var _default = joi => {
  return {
    type: 'absolutePath',
    base: joi.string(),
    messages: {
      error: '"{{#label}}" must be an absolute path'
    },
    validate: (value, helpers) => {
      if (!/^(?<drive>[a-zA-Z]+:)?\//u.test(value)) {
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