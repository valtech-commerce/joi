//--------------------------------------------------------
//-- Extensions
//--------------------------------------------------------
import * as joiSchema    from './object/joi-schema';
import * as absolutePath from './string/absolute-path';
import * as kebabCase    from './string/kebab-case';
import * as variableName from './string/variable-name';


module.exports = {

	[joiSchema.id]: joiSchema.extension,

	[absolutePath.id]: absolutePath.extension,
	[kebabCase.id]:    kebabCase.extension,
	[variableName.id]: variableName.extension

};
