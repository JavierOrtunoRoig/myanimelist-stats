const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-f081c0d0.js","imports":["_app/immutable/start-f081c0d0.js","_app/immutable/chunks/index-84025daa.js","_app/immutable/chunks/singletons-01f23006.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-b1827696.js'),
			() => import('./chunks/1-d0c05cae.js'),
			() => import('./chunks/2-40e7e806.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
