"use strict";

Object.defineProperty(exports, "extensions", {
  enumerable: true,
  get: function () {
    return _extensions.default;
  }
});
Object.defineProperty(exports, "validateArgument", {
  enumerable: true,
  get: function () {
    return _validateArgument.default;
  }
});
exports.Joi = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _extensions = _interopRequireDefault(require("./extensions"));

var _validateArgument = _interopRequireDefault(require("./methods/validate-argument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- @absolunet/joi
//--------------------------------------------------------
//-- Load extensions
const ExtendedJoi = Object.entries(_extensions.default).reduce((NewJoi, [, extension]) => {
  return NewJoi.extend(extension);
}, _joi.default);
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

exports.Joi = ExtendedJoi;