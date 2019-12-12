"use strict";

exports.default = void 0;

var _joi = _interopRequireWildcard(require("@hapi/joi"));

var _joiSchema = _interopRequireDefault(require("../extensions/object/joi-schema"));

var _variableName = _interopRequireDefault(require("../extensions/string/variable-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//--------------------------------------------------------
//-- Validate argument
//--------------------------------------------------------
const validateArgument = (label, value, schema) => {
  const {
    error
  } = _joi.default.object({
    [label]: schema
  }).validate({
    [label]: value
  });

  if (error) {
    throw new _joi.ValidationError(error.annotate(), error.details, error._original);
  }
};

const schemas = {
  label: _joi.default.extend(_variableName.default.extension).variableName().required(),
  value: _joi.default.any(),
  schema: _joi.default.extend(_joiSchema.default.extension).joiSchema().required()
};

var _default = (label, value, schema) => {
  validateArgument('label', label, schemas.label);
  validateArgument('value', value, schemas.value);
  validateArgument('schema', schema, schemas.schema);
  return validateArgument(label, value, schema);
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;