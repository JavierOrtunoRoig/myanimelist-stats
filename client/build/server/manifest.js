const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-caa414f3.js","imports":["_app/immutable/start-caa414f3.js","_app/immutable/chunks/index-e6e89573.js","_app/immutable/chunks/singletons-bcdcf876.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-645671db.js'),
			() => import('./chunks/1-3a687725.js'),
			() => import('./chunks/2-2c47e9c0.js')
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
