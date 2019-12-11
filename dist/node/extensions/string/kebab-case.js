"use strict";

exports.extension = exports.id = void 0;
//--------------------------------------------------------
//-- kebab-case
//--------------------------------------------------------
const id = 'kebabCase';
exports.id = id;

const extension = joi => {
  return {
    type: id,
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

exports.extension = extension;