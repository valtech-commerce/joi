"use strict";

Object.defineProperty(exports, "validateArgument", {
  enumerable: true,
  get: function () {
    return _validateArgument.default;
  }
});
exports.extensions = exports.Joi = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _extensions = _interopRequireDefault(require("./extensions"));

var _validateArgument = _interopRequireDefault(require("./methods/validate-argument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- @absolunet/joi
//--------------------------------------------------------
//-- Load extensions
const {
  NewJoi: ExtendedJoi,
  list: extensions
} = Object.entries(_extensions.default).reduce(({
  NewJoi,
  list
}, [name, {
  default: extension
}]) => {
  list[name] = extension;
  return {
    NewJoi: NewJoi.extend(extension),
    list
  };
}, {
  NewJoi: _joi.default,
  list: {}
});
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

exports.extensions = extensions;
exports.Joi = ExtendedJoi;