"use strict";

exports.extension = exports.id = void 0;

var _isVarName = _interopRequireDefault(require("is-var-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- Variable name
//--------------------------------------------------------
const id = 'variableName';
exports.id = id;

const extension = joi => {
  return {
    type: id,
    base: joi.string(),
    messages: {
      error: '{{#label}} must be a valid JavaScript identifier name'
    },
    validate: (value, helpers) => {
      const valid = value.split('.').every(item => {
        return (0, _isVarName.default)(item);
      });

      if (!valid) {
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