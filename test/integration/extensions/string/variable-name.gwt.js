//--------------------------------------------------------
//-- Variable name - Given-When-Then
//--------------------------------------------------------
import * as gwt from '../extensions.gwt';
import { id }   from '../../../../dist/node/extensions/string/variable-name';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


given.currentExtension = () => {
	given.extension(id);
};


export { given, when, then };
