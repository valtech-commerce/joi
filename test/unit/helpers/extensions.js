//--------------------------------------------------------
//-- Extensions unit test helper
//--------------------------------------------------------
import { Joi } from '../../../dist/node';


class ExtensionsUnitTestHelper {

	testValues(name, valid, invalid) {
		describe(`Validate that ${name} extension works`, () => {

			//-- Does validate
			valid.forEach(([description, value]) => {
				test(`Ensure ${description} validates`, () => {
					expect(Joi[name]().validate(value)).not.toContainKey('error');
				});
			});


			//-- Does not validate
			invalid.forEach(([description, value]) => {
				test(`Ensure ${description} does not validate`, () => {
					expect(Joi[name]().validate(value)).toContainKey('error');
				});
			});

		});
	}

}


export default new ExtensionsUnitTestHelper();
