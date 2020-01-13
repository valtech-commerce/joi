"use strict";

exports.extension = exports.id = void 0;
//--------------------------------------------------------
//-- Absolute path
//--------------------------------------------------------
const id = 'absolutePath';
exports.id = id;

const extension = joi => {
  return {
    type: id,
    base: joi.string(),
    messages: {
      error: '{{#label}} must be an absolute path'
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

exports.extension = extension;