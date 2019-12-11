"use strict";

exports.extension = exports.id = void 0;
//--------------------------------------------------------
//-- joi schema
//--------------------------------------------------------
const id = 'joiSchema';
exports.id = id;

const extension = joi => {
  return {
    type: id,
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

exports.extension = extension;