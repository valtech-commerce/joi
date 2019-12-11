//--------------------------------------------------------
//-- joi - Feature tests
//--------------------------------------------------------
import { difference }        from 'lodash';
import Joi                   from '@hapi/joi';
import { given, when, then } from '../base.gwt';


let ExtendedJoi;
let extensions;


//-- Given - Tabula rasa
given.featureTabulaRasa = () => {
	given.baseTabulaRasa();

	ExtendedJoi = undefined;
	extensions  = undefined;
};


//-- When
when.packageIsImported = () => {
	when.attempting(() => {
		({ Joi: ExtendedJoi, extensions } = require('../../dist/node'));  // eslint-disable-line global-require
	});
};


//-- Then
then.extendedJoiShouldContainVanillaJoi = () => {
	expect(ExtendedJoi).toBeObject();
	expect(ExtendedJoi).toContainEntries(Object.entries(Joi));
};

then.extendedJoiShouldContainAllExtensions = () => {
	const joiKeys = difference(Object.keys(ExtendedJoi), Object.keys(Joi));
	expect(joiKeys).toIncludeAllMembers(Object.keys(extensions));
};


export { given, when, then };
