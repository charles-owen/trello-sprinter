(function () {
	var opts = {
		"version": 1,
		"apiEndpoint": "https://api.trello.com",
		"authEndpoint": "https://trello.com",
		"intentEndpoint": "https://trello.com",
		"key": "d25bd9e3e273f0dd18c4e8d406b98035"
	};
	var deferred, isFunction, isReady, ready, waitUntil, wrapper, slice = [].slice;
	wrapper = function (window, jQuery, opts) {
		var Trello, apiEndpoint, authEndpoint, authorizeURL, baseURL, m, intentEndpoint, q, key, s, t, location, B, y, u, token, version, w;
		key = opts.key;
		token = opts.token;
		apiEndpoint = opts.apiEndpoint;
		authEndpoint = opts.authEndpoint;
		intentEndpoint = opts.intentEndpoint;
		version = opts.version;
		baseURL = apiEndpoint + "/" + version + "/";
		location = window.location;
		Trello = {
			version: function () {
				return version
			},
			key: function () {
				return key
			},
			setKey: function (c) {
				key = c
			},
			token: function () {
				return token
			},
			setToken: function (c) {
				token = c
			},
			rest: function () {
				var c, b, n, d;
				b = arguments[0];
				c = 2 <= arguments.length ? slice.call(arguments, 1) : [];
				d = B(c);
				n = d[0];
				c = d[1];
				opts = {url: "" + baseURL + n, type: b, data: {}, dataType: "json", success: d[2], error: d[3]};
				key && (opts.data.key =
					key);
				token && (opts.data.token = token);
				null != c && jQuery.extend(opts.data, c);
				return jQuery.ajax(opts)
			},
			authorized: function () {
				return null != token
			},
			deauthorize: function () {
				token = null;
				w("token", token)
			},
			authorize: function (userOpts) {
				var l, n, d, e, k;
				opts = jQuery.extend(!0, {
					type: "redirect",
					persist: !0,
					interactive: !0,
					scope: {read: !0, write: !1, account: !1},
					expiration: "30days"
				}, userOpts);
				userOpts = /[&#]?token=([0-9a-f]{64})/;
				n = function () {
					if (opts.persist && null != token) return w("token", token)
				};
				opts.persist && null == token && (token = y("token"));
				null == token && (token = null != (d = userOpts.exec(location.hash)) ? d[1] : void 0);
				if (this.authorized()) return n(),
					location.hash = location.hash.replace(userOpts, ""), "function" === typeof opts.success ? opts.success() : void 0;
				if (!opts.interactive) return "function" === typeof opts.error ? opts.error() : void 0;
				e = function () {
					var b, c;
					b = opts.scope;
					c = [];
					for (l in b) (k = b[l]) && c.push(l);
					return c
				}().join(",");
				switch (opts.type) {
					case "popup":
						(function () {
							var c, d, l, f, k, m;
							waitUntil("authorized", function (c) {
								return function (c) {
									return c ? (n(), "function" === typeof opts.success ? opts.success() : void 0) : "function" === typeof opts.error ? opts.error() : void 0
								}
							}(this));
							d = window.screenX + (window.innerWidth - 550) / 2;
							m = window.screenY +
								(window.innerHeight - 725) / 2;
							l = null != (k = /^[a-z]+:\/\/[^\/]*/.exec(location)) ? k[0] : void 0;
							c = window.open(authorizeURL({
								return_url: l,
								callback_method: "postMessage",
								scope: e,
								expiration: opts.expiration,
								name: opts.name
							}), "trello", "width=550,height=725,left=" + d + ",top=" + m);
							f = function (a) {
								var d;
								a.origin === authEndpoint && a.source === c && (null != (d = a.source) && d.close(), token = null != a.data && /[0-9a-f]{64}/.test(a.data) ? a.data : null, "function" === typeof window.removeEventListener && window.removeEventListener("message", f, !1), isReady("authorized", Trello.authorized()))
							};
							return "function" ===
							typeof window.addEventListener ? window.addEventListener("message", f, !1) : void 0
						})();
						break;
					default:
						window.location = authorizeURL({
							redirect_uri: location.href,
							callback_method: "fragment",
							scope: e,
							expiration: opts.expiration,
							name: opts.name
						})
				}
			},
			addCard: function (c, a) {
				var n, d;
				n = {mode: "popup", source: key || window.location.host};
				d = function (a) {
					var d, l, e;
					l = function (c) {
						var d;
						window.removeEventListener("message", l);
						try {
							return d = JSON.parse(c.data), d.success ? a(null, d.card) : a(Error(d.error))
						} catch (e) {
						}
					};
					"function" === typeof window.addEventListener && window.addEventListener("message",
						l, !1);
					d = window.screenX + (window.outerWidth - 500) / 2;
					e = window.screenY + (window.outerHeight - 600) / 2;
					return window.open(intentEndpoint + "/add-card?" + jQuery.param(jQuery.extend(n, c)), "trello", "width=500,height=600,left=" + d + ",top=" + e)
				};
				return null != a ? d(a) : window.Promise ? new Promise(function (c, a) {
					return d(function (b, d) {
						return b ? a(b) : c(d)
					})
				}) : d(function () {
				})
			}
		};
		s = ["GET", "PUT", "POST", "DELETE"];
		apiEndpoint = function (c) {
			return Trello[c.toLowerCase()] = function () {
				return this.rest.apply(this, [c].concat(slice.call(arguments)))
			}
		};
		m = 0;
		for (q = s.length; m < q; m++) u = s[m], apiEndpoint(u);
		Trello.del = Trello["delete"];
		u = "actions cards checklists boards lists members organizations lists".split(" ");
		m = function (c) {
			return Trello[c] = {
				get: function (a, b, d, e) {
					return Trello.get(c + "/" + a, b, d, e)
				}
			}
		};
		q = 0;
		for (s = u.length; q < s; q++) apiEndpoint = u[q], m(apiEndpoint);
		window.Trello = Trello;
		authorizeURL = function (args) {
			return authEndpoint + "/" + version + "/authorize?" + jQuery.param(jQuery.extend({response_type: "token", key: key}, args))
		};
		B = function (c) {
			var a, b, d;
			b = c[0];
			a = c[1];
			d = c[2];
			c = c[3];
			isFunction(a) && (c = d, d = a, a = {});
			b = b.replace(/^\/*/, "");
			return [b, a, d, c]
		};
		t = window.localStorage;
		null != t ? (y = function (a) {
			return t["trello_" + a]
		}, w = function (a,
		                 b) {
			if (null === b) return delete t["trello_" + a];
			try {
				return t["trello_" + a] = b
			} catch (e) {
			}
		}) : y = w = function () {
		}
	};

	deferred = {};
	ready = {};

	waitUntil = function (name, fx) {
		return null != ready[name] ? fx(ready[name]) : (null != deferred[name] ? deferred[name] : deferred[name] = []).push(fx)
	};
	isReady = function (name, value) {
		var a, fxs, e, p;
		ready[name] = value;
		if (deferred[name])
			for (fxs = deferred[name], delete deferred[name], e = 0, p = fxs.length; e < p; e++)
				a = fxs[e], a(value)
	};
	isFunction = function (b) {
		return "function" === typeof b
	};
	wrapper(window, jQuery, opts);
})()
