"use strict";

exports.default = void 0;

var _isVarName = _interopRequireDefault(require("is-var-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- Variable name
//--------------------------------------------------------
var _default = joi => {
  return {
    type: 'variableName',
    base: joi.string(),
    messages: {
      error: '"{{#label}}" must be a valid JavaScript identifier name'
    },
    validate: (value, helpers) => {
      if (!(0, _isVarName.default)(value)) {
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