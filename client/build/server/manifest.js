const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-d2006b02.js","imports":["_app/immutable/start-d2006b02.js","_app/immutable/chunks/index-84025daa.js","_app/immutable/chunks/singletons-01f23006.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-02cd3a32.js'),
			() => import('./chunks/1-60b1dfbc.js'),
			() => import('./chunks/2-675ec117.js')
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
