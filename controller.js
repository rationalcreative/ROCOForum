const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'ROCOForumStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.assign({
						ROCOForumTopic: Math.random().toString(),
					}, Object.fromEntries((new URLSearchParams(req.query)).entries())));
			},
		}];
	},

};

Object.assign(exports, mod);
