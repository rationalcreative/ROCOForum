const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOForum: '.ROCOForum',

	ROCOForumList: '.ROCOForumList',
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

	it('shows ROCOForumList', function () {
		browser.assert.elements(ROCOForumList, 1);
	});

});
