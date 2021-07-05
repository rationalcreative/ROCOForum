const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOForum: '.ROCOForum',

	ROCOForumHeading: '.ROCOForumHeading',

	ROCOForumNoscriptList: 'noscript .ROCOForumNoscriptList',

	ROCOForumList: '.ROCOForumList',

	ROCOForumButton: '.ROCOForumButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('ROCOForum_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOForum', function () {
		browser.assert.elements(ROCOForum, 1);
	});

	it('shows ROCOForumHeading', function () {
		browser.assert.elements(ROCOForumHeading, 1);
	});

	it.skip('shows ROCOForumNoscriptList', function () {
		browser.assert.elements(ROCOForumNoscriptList, 1);
	});

	it('shows ROCOForumList', function () {
		browser.assert.elements(ROCOForumList, 1);
	});

	it('shows ROCOForumButton', function () {
		browser.assert.elements(ROCOForumButton, 1);
	});

});
