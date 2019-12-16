//--------------------------------------------------------
//-- Extension base tests
//--------------------------------------------------------
export default ({ given }) => {

	beforeEach(() => {
		given.noException();
		given.noExtension();
		given.noResult();
		given.currentExtension();
	});

};
