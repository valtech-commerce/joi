//--------------------------------------------------------
//-- joi - Feature tests
//--------------------------------------------------------
import { given, when, then } from './index.gwt';


describe(`Validate that it works`, () => {

	beforeAll(() => {
		given.noException();
		given.noImportedPackage();
	});


	test(`Ensure extended joi extends vanilla joi`, () => {
		when.extendedJoiImported();
		then.extendedJoiShouldContainVanillaJoi();
	});


	test(`Ensure all extensions are exposed in joi with the same name`, () => {
		when.extendedJoiImported();
		when.extensionsImported();
		then.extendedJoiShouldContainAllExtensions();
	});

});

