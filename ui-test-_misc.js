const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOForum_Misc', function () {

	const ROCOForumTopic = Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ROCOForumTopic,
		});
	});

	describe('ROCOForumList', function test_ROCOForumList () {

		it('sets category', function () {
			browser.assert.attribute(ROCOForumList, 'category', ROCOForumTopic);
		});

		it('sets per-page', function () {
			browser.assert.attribute(ROCOForumList, 'per-page', '10');
		});
		
	});

});
