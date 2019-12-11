//--------------------------------------------------------
//-- joi - Feature tests
//--------------------------------------------------------
import { given, when, then } from './index.gwt';


describe(`Validate that it works`, () => {

	beforeAll(() => {
		given.featureTabulaRasa();
	});


	test(`Ensure package loads`, () => {
		when.packageIsImported();
		then.shouldNotHaveThrown();
	});


	test(`Ensure extended joi extends vanilla joi`, () => {
		when.packageIsImported();
		then.extendedJoiShouldContainVanillaJoi();
	});


	test(`Ensure all extensions are exposed in joi with the same name`, () => {
		when.packageIsImported();
		then.extendedJoiShouldContainAllExtensions();
	});

});

