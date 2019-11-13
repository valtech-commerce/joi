"use strict";

exports.default = void 0;

//--------------------------------------------------------
//-- joi schema
//--------------------------------------------------------
var _default = joi => {
  return {
    type: 'joiSchema',
    base: joi.object(),
    messages: {
      error: '"{{#label}}" must be an joi schema'
    },
    validate: (value, helpers) => {
      if (!joi.isSchema(value)) {
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