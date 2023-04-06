const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('ROCOForum_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes ROCOForumHeading', function () {
			return browser.assert.text(ROCOForumHeading, uLocalized('ROCOForumHeadingText'));
		});

		it('localizes ROCOForumButton', function() {
			return browser.assert.text(ROCOForumButton, uLocalized('ROCOForumButtonText'));
		});

	});

});
