//--------------------------------------------------------
//-- joi - Feature tests
//--------------------------------------------------------
import { difference } from 'lodash';
import Joi            from '@hapi/joi';


describe(`Validate that it works`, () => {
	let ExtendedJoi;
	let extensions;


	test(`Ensure package loads`, () => {
		expect(() => {
			({ Joi: ExtendedJoi, extensions } = require('../../dist/node'));  // eslint-disable-line global-require
		}).not.toThrow();
	});


	test(`Ensure extended joi extends vanilla joi`, () => {
		expect(ExtendedJoi).toBeObject();
		expect(ExtendedJoi).toContainEntries(Object.entries(Joi));
	});


	test(`Ensure all extensions are exposed in joi with the same name`, () => {
		const joiKeys = difference(Object.keys(ExtendedJoi), Object.keys(Joi));
		expect(joiKeys).toIncludeAllMembers(Object.keys(extensions));
	});

});

