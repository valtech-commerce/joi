//--------------------------------------------------------
//-- joi - Feature tests
//--------------------------------------------------------
import { difference }       from 'lodash';
import Joi                  from '@hapi/joi';
import * as importedPackage from '../../dist/node';
import * as gwt             from '../base.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


let ExtendedJoi;
let extensions;


//-- Given - Reset
given.noImportedPackage = () => {
	ExtendedJoi = undefined;
	extensions  = undefined;
};


//-- When
when.extendedJoiImported = () => {
	({ Joi: ExtendedJoi } = importedPackage);
};

when.extensionsImported = () => {
	({ extensions } = importedPackage);
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
