const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOForum_Misc', function () {

	const ROCOForumTopic = Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ROCOForumTopic,
		});
	});

	describe('ROCOForum', function test_ROCOForum () {

		it('classes OLSKDecorModule', function () {
			browser.assert.hasClass(ROCOForum, 'OLSKDecorModule');
		});
		
	});

	describe.skip('ROCOForumNoscriptList', function test_ROCOForumNoscriptList () {

		it('sets src', function () {
			browser.assert.attribute(ROCOForumNoscriptList, 'src', `https://cafe.rosano.ca/embed/topics?category=${ ROCOForumTopic }&per_page=10`);
		});

		it('sets frameborder', function () {
			browser.assert.attribute(ROCOForumNoscriptList, 'frameborder', '0');
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

	describe('ROCOForumButton', function test_ROCOForumButton () {

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(ROCOForumButton, 'OLSKDecorPressCall');
		});

		it('sets href', function () {
			browser.assert.attribute(ROCOForumButton, 'href', 'https://cafe.rosano.ca/c/' + ROCOForumTopic);
		});

	});

});
