(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TrelloSprinter"] = factory();
	else
		root["TrelloSprinter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateTrelloSprinter"];
/******/ 	window["webpackHotUpdateTrelloSprinter"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "3e533a03ebff8a4ce97a";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "TrelloSprinter";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./index.js")(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/charl/Documents/Classes/CSE335/web-new/node_modules/css-loader!C:/Users/charl/Documents/Classes/CSE335/web-new/node_modules/resolve-url-loader!C:/Users/charl/Documents/Classes/CSE335/web-new/node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "../../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.trello-sprinter {\n  margin: 0;\n}\n\ndiv.trello-sprinter h2 {\n  text-align: center;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n  font-size: 1em;\n  margin: 0;\n}\n\ndiv.trello-sprinter p.trello-status {\n  text-align: center;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n}\n\ndiv.trello-sprinter p.trello-msg {\n  text-align: center;\n  font-style: italic;\n  font-size: 0.9em;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n}\n\ndiv.trello-sprinter p.center {\n  text-align: center;\n}\n\ndiv.trello-sprinter div.trello-view {\n  background: white;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-view h3 {\n  border-top: 2px solid black;\n  margin: 0;\n  padding: 0.25em 0 0.25em 20px;\n}\n\ndiv.trello-sprinter div.trello-view h3 span.date {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 0.7em;\n  float: right;\n  padding-top: 0.25em;\n}\n\ndiv.trello-sprinter div.trello-view p.trello-completed-header {\n  text-align: center;\n  font-weight: bold;\n  background: black;\n  color: deepskyblue;\n}\n\ndiv.trello-sprinter .trello-plus {\n  background-image: url(" + escape(__webpack_require__(/*! ./img/plus.png */ "./img/plus.png")) + ");\n}\n\ndiv.trello-sprinter .trello-minus {\n  background-image: url(" + escape(__webpack_require__(/*! ./img/minus.png */ "./img/minus.png")) + ");\n}\n\ndiv.trello-sprinter .trello-plus,\ndiv.trello-sprinter .trello-minus {\n  background-repeat: no-repeat;\n  background-position: left center;\n  background-size: 16px 16px;\n  cursor: pointer;\n}\n\ndiv.trello-sprinter div.trello-expand {\n  position: relative;\n  display: none;\n  overflow: auto;\n  background: #f0f0f0;\n  padding: 0.25em;\n  margin-bottom: 6pt;\n  border: 1pt solid gray;\n  word-wrap: normal;\n}\n\ndiv.trello-sprinter div.trello-expand,\ndiv.trello-sprinter .trello-errors {\n  -moz-box-shadow: 6pt 6px 10pt #888;\n  -webkit-box-shadow: 6pt 6px 10pt #888;\n  box-shadow: 6pt 6px 10pt #888;\n}\n\ndiv.trello-sprinter p.trello-count {\n  margin: 0 0 1em 0;\n  text-align: center;\n  font-size: 0.85em;\n}\n\ndiv.trello-sprinter div.trello-card {\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\ndiv.trello-sprinter div.trello-card h4 {\n  background-color: #81d0fd;\n  margin: 0.5em 0 0 0;\n  padding: 0 0.25em;\n}\n\ndiv.trello-sprinter div.trello-card h4 span.trello-date {\n  font-weight: normal;\n  font-size: 0.9em;\n  float: right;\n  padding-top: 0.25em;\n}\n\ndiv.trello-sprinter div.trello-card .trello-card-members {\n  margin: 0 0.25em;\n  font-size: 0.85em;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-description {\n  margin: 0.5em 1em;\n}\n\ndiv.trello-sprinter div.trello-description p {\n  margin: 0 0 0.25em 0;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-comments {\n  margin: 0 2em;\n}\n\ndiv.trello-sprinter div.trello-comments h5 {\n  margin: 0;\n  padding: 0 0.25em;\n  background-color: #ccc;\n  font-size: 0.8em;\n  font-weight: normal;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-comments h5 span.trello-date {\n  font-weight: normal;\n  font-style: normal;\n  float: right;\n}\n\ndiv.trello-sprinter div.trello-comments p {\n  margin: 0 0.25em;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-updates {\n  margin: 1em 2em;\n}\n\ndiv.trello-sprinter div.trello-updates p {\n  margin: 0;\n  padding: 0 0.25em;\n  font-size: 0.8em;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-updates p span.trello-date {\n  font-weight: normal;\n  font-style: normal;\n  float: right;\n}\n\ndiv.trello-sprinter div.trello-updates p span.list {\n  font-style: normal;\n  font-weight: bold;\n}\n\ndiv.trello-sprinter div.trello-sprints {\n  background: white;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors {\n  background: #c41425;\n  color: white;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-warnings {\n  background: #ff80df;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-members {\n  background: #f0f0f0;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-members div.trello-member {\n  margin-bottom: 1em;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings,\ndiv.trello-sprinter div.trello-sprints div.trello-members {\n  position: relative;\n  overflow: auto;\n  padding: 0 1em 1em 1em;\n  margin: 1em 3em 6pt 3em;\n  border: 1pt solid gray;\n  word-wrap: normal;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors p,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings p,\ndiv.trello-sprinter div.trello-sprints div.trello-members p {\n  font-size: 1.1em;\n  margin: 0;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors span.trello-code,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings span.trello-code,\ndiv.trello-sprinter div.trello-sprints div.trello-members span.trello-code {\n  font-weight: bold;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors h3,\ndiv.trello-sprinter div.trello-sprints div.trello-errors h4,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings h3,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings h4,\ndiv.trello-sprinter div.trello-sprints div.trello-members h3,\ndiv.trello-sprinter div.trello-sprints div.trello-members h4 {\n  margin: 0;\n  padding: 0.25em 0;\n  text-align: center;\n}\n\ndiv.trello-sprinter div.trello-info {\n  border-top: 1px solid black;\n}\n\ndiv.trello-sprinter div.trello-info p {\n  margin: 1em 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/charl/Documents/Classes/CSE335/web-new/node_modules/css-loader/lib/css-base.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../node_modules/css-loader/lib/url/escape.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/charl/Documents/Classes/CSE335/web-new/node_modules/css-loader/lib/url/escape.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/charl/Documents/Classes/CSE335/web-new/node_modules/style-loader/lib/addStyles.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!*********************************************************************************************!*\
  !*** C:/Users/charl/Documents/Classes/CSE335/web-new/node_modules/style-loader/lib/urls.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./img/minus.png":
/*!***********************!*\
  !*** ./img/minus.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ1JREFUeNqkkr1OAkEQx+fuhkPgkK8ghYZYGPzo7GjFxMJeQ7TQzljhGxhs9A2MhY0V2muMifoAJpaQGB+Aw0NPjuOA+3J34eg8ME7yT2Y3+/vv7OxwruvCfwL3T+rA83wMEctkXSTKjGFkooplWceO43yj49hAVF7NBUrFjWlIxwVf+kO1M5WHVumlatLlEa/rOhAVt9cjkJBcIM6+ome2CmHGUBY1TaNOmVSMZwcmiVRMAMKxp2K73WKb5D0TG9DGexzqeocltm0zeWGaJi0TOh2D5bY9MBcEBEmSwOOw2+2OKqDK7zz53n5zloNerwceh5bljsoyjB5kswX/f8cG+XYBPA45DlliGH1SVh+uT8O+BooyRQw48DgyPyGW9PsOBAIitFodXwNRDA7BAYeiGB02R6TLiUfY4zAYZImsqHwmnRAnguWmCYST2cW68gqzS7tzXxrkF+dDEI0ga9JvUlSAq9s21Jv8Ze1x754jJslIPLewsnZxKCWXNwG4mTFj1Gh/1u6qzwfnuvr2Tg1oN6J/asAg6GRpPwIMAFcAzawVzQR4AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./img/plus.png":
/*!**********************!*\
  !*** ./img/plus.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdtJREFUeNqkUzsvBFEUPjNzZhY7az3CFh4RkfWqNKJFolDoyIaCTlR0SqGhEp0oNKqlEgkRCX6ARIdEZLWWwdrZsY95ufeuO3Zssgon+XLP6ztz7jl3BNd14T+Cc2tPIIpiGBFXiR0jiPzBSRLELctacRznAx3HBoLVgai8GBurhaY6qSL7JWVH4mfpxatbk5pLomEYQBCbGg1CveoCqVwRNGdypIZxKBd1XaeVIo1hkSWUysTSDTuPtvp9/sawBITHroqZTJo5yX3KCvDYbz8dPI+hYXwyxbZtBi6maQKPJRKPJFYsIkkIqqp6Mczlcl4HFEPTF2WDm1y+9/SDjSjk83ngPLQs12srm81De/uIl5xInLOzs3P0Z+/4TNYuAeehICBTstkCaasA++s1XvJgrBjbX/9ZraZVkQICcB55P9VMKRQckGUF0unPkq8VY6U+RQn4Yqgooe/hKNT03b2tbZCdsiyUzYXzMBBgSlJLiZGmesWXdLgpf6/T9L/lVxMIL8k+bGjX0NIz0/quw1B3RzWEgsiGVBwUMHCbQksB7B1n4OlV3L07nz2lvTUE66JdfcM7C2pD7ziA0Fz5X3KfM293J7eX89tG6v6BFqDTCJUN4G+hL0v/EmAAoNXlG97vnHoAAAAASUVORK5CYII="

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello.scss */ "./trello.scss");
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trello_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/TrelloSprinter */ "./src/TrelloSprinter.js");


/* harmony default export */ __webpack_exports__["default"] = (_src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__["TrelloSprinter"]);

/***/ }),

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Member */ "./src/Member.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./src/List.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./src/Card.js");
/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Update */ "./src/Update.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment */ "./src/Comment.js");
/*
 * Representation of a Trello Board
 */





var Board = function Board(data) {
  this.data = data;
  this.id = data.id;
  this.name = data.name;
  this.lists = [];
  this.members = {};

  this.find_card = function (id) {
    for (var i = 0; i < this.lists.length; i++) {
      var card = this.lists[i].find_card(id);

      if (card !== null) {
        return card;
      }
    }

    return null;
  };

  this.add_member = function (member) {
    this.members[member.id] = member;
  };
};

Board.fetch = function (trello, name, msg, success, failure) {
  msg.innerText = 'Fetching board ' + name; /// Keeps track of how many open async calls there are right now

  var active = 0; // Will be set to point to a new Board object

  var board = null;
  async_start();
  trello.get("/member/me/boards?fields=all", function (data) {
    for (var i = 0; i < data.length; i++) {
      var boardData = data[i];

      if (boardData.name.toLowerCase() === name.toLowerCase()) {
        // We have found the board (if not closed)
        if (!boardData.closed) {
          // Create the board object
          board = new Board(boardData); // Fetch the membership

          fetch_membership(board); // Fetch the lists for the board

          fetch_lists(board);
          break;
        }
      }
    }

    if (board === null) {
      failure("Unable to find Trello board " + name);
      return;
    }

    async_end();
  }, function (data) {
    failure("Unable to fetch Trello boards");
  }, msg);
  /**
   * Fetch the membership of the board.
   * @param board Board to fetch for
   */

  function fetch_membership(board) {
    async_start();
    trello.get("/board/" + board.id + "/members?fields=all", function (data) {
      data.forEach(function (memberData) {
        var member = new _Member__WEBPACK_IMPORTED_MODULE_0__["Member"](board, memberData);
        board.add_member(member);
      });
      async_end();
    }, function (data) {
      failure("Unable to fetch Trello membership");
    }, msg);
  }

  function fetch_lists(board) {
    msg.innerText = "Fetching lists for " + name;
    async_start();
    trello.get("/boards/" + board.id + "/lists?filter=open", function (data) {
      data.forEach(function (listData) {
        if (!listData.closed) {
          var list = new _List__WEBPACK_IMPORTED_MODULE_1__["List"](board, listData);
          board.lists.push(list);
        }
      });
      fetch_cards(board);
      async_end();
    }, function (data) {
      failure("Unable to fetch Trello lists");
    }, msg);
  }
  /**
   * Fetch all cards as a single batch operation.
   * @param board Board we are fetching for
   */


  function fetch_cards(board) {
    msg.innerText = "Fetching cards"; // Collect up all URLs for all of the lists

    var urls = '';

    for (var i = 0; i < board.lists.length; i++) {
      var list = board.lists[i];

      if (urls.length > 0) {
        urls += ',';
      }

      urls += "/lists/" + list.id + "/cards/open";
    } // Get get it


    async_start();
    trello.get("/batch?urls=" + urls, function (data) {
      // Loop over the result for each provided URL
      for (var i = 0; i < data.length && i < board.lists.length; i++) {
        var list = board.lists[i];
        var cardsData = data[i][200];
        cardsData.forEach(function (cardData) {
          if (!cardData.closed) {
            var card = new _Card__WEBPACK_IMPORTED_MODULE_2__["Card"](board, list, cardData);
            list.add_card(card);
          }
        });
      }

      fetch_actions(board);
      async_end();
    }, function (data) {
      failure("Unable to fetch Trello cards");
    }, msg);
  }

  function fetch_actions(board) {
    async_start();
    trello.get("/board/" + board.id + "/actions?filter=commentCard,updateCard:idList&limit=1000", function (data) {
      data.forEach(function (action) {
        if (!action.closed) {
          if (action.type === "commentCard") {
            var card = board.find_card(action.data.card.id);

            if (card !== null) {
              var comment = new _Comment__WEBPACK_IMPORTED_MODULE_4__["Comment"](board, card, action);
              card.comments.push(comment);
            } else {
              console.log("card not found");
            } //console.log(action);

          } else if (action.type === 'updateCard') {
            var _card = board.find_card(action.data.card.id);

            if (_card !== null) {
              var update = new _Update__WEBPACK_IMPORTED_MODULE_3__["Update"](board, _card, action);

              _card.updates.push(update);
            } //console.log(action);

          }
        }
      });
      board.lists.forEach(function (list) {
        list.cards.forEach(function (card) {
          card.sort_updates();
        });
      });
      async_end();
    }, function (data) {
      failure("Unable to fetch Trello card information");
    }, msg);
  }

  function async_start() {
    active++;
  }

  function async_end() {
    active--;

    if (active === 0) {
      success(board);
    }
  }
};

Board.prototype.find_list = function (name) {
  name = name.toLowerCase();

  for (var i = 0; i < this.lists.length; i++) {
    var list = this.lists[i];

    if (list.name.toLowerCase() === name) {
      return list;
    }
  }

  return null;
};

/***/ }),

/***/ "./src/BoardView.js":
/*!**************************!*\
  !*** ./src/BoardView.js ***!
  \**************************/
/*! exports provided: BoardView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardView", function() { return BoardView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataView */ "./src/DataView.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./src/Util.js");
/**
 * @file
 * Standard Trello board view
 */


var BoardView = function BoardView(div, board) {
  _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this);

  this.present = function () {
    var view = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-view');
    div.appendChild(view);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = board.lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var list = _step.value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    board.lists.forEach(function (list) {
      presentList(view, list);
    });
  };

  var presentList = function presentList(view, list) {
    var header = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('h3', 'trello-plus');
    header.innerText = list.name;
    view.appendChild(header);
    var expander = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-expand');
    expander.style.display = 'none';
    view.appendChild(expander);
    header.addEventListener('click', function (event) {
      if (expander.style.display === 'none') {
        expander.style.display = 'block';
        _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].removeClass(header, 'trello-plus');
        _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].addClass(header, 'trello-minus');
      } else {
        expander.style.display = 'none';
        _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].removeClass(header, 'trello-minus');
        _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].addClass(header, 'trello-plus');
      }
    });
    var count = list.count_members();
    var members = '<em>Cards:</em>[' + list.cards.length + '] ';

    for (var c in count) {
      if (count.hasOwnProperty(c)) {
        members += count[c].member.name + ':[' + count[c].cnt + ']&nbsp;&nbsp;';
      }
    }

    var countEl = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('p', 'trello-count');
    expander.appendChild(countEl);
    countEl.innerHTML = members;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = list.cards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var card = _step2.value;
        presentCard(expander, card);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  var presentCard = function presentCard(div, card) {
    //
    // Heading
    //
    var date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(card.created);
    var cardDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-card');
    div.appendChild(cardDiv);
    cardDiv.innerHTML = "<h4><span class=\"trello-date\">".concat(date, "</span>").concat(card.name, "</h4>"); //
    // Members
    //

    var members = '';
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = card.members[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var id = _step3.value;
        var member = card.board.members[id];

        if (members.length > 0) {
          members += ' / ';
        }

        members += '<span>' + member.name + '</span>';
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var membersP = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('p', 'trello-card-members');
    cardDiv.appendChild(membersP);
    membersP.innerHTML = members; //
    // Description
    //

    var desc = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-description');
    cardDiv.appendChild(desc);
    desc.innerHTML = card.desc;
    presentComments(cardDiv, card);
    presentUpdates(cardDiv, card);
  };

  this.presentCard = presentCard;

  var presentComments = function presentComments(div, card) {
    if (card.comments.length === 0) {
      return;
    }

    var commentDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-comments');
    div.appendChild(commentDiv);
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = card.comments[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var comment = _step4.value;
        var member = card.board.members[comment.member];
        var memberName = member !== undefined ? member.name : "undefined";
        var date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(comment.date);
        var h5 = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('h5');
        commentDiv.appendChild(h5);
        h5.innerHTML = "<span class=\"trello-date\">".concat(date, "</span>").concat(memberName);
        var textDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div');
        commentDiv.appendChild(textDiv);
        textDiv.innerHTML = comment.text;
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  };

  var presentUpdates = function presentUpdates(div, card) {
    if (card.updates.length === 0) {
      return;
    }

    var updateDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-updates');
    div.appendChild(updateDiv);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = card.updates[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var update = _step5.value;
        var member = card.board.members[update.member];
        var memberName = member !== undefined ? member.name : "undefined";
        var date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(update.date);
        var p = document.createElement('p');
        updateDiv.appendChild(p);
        p.innerHTML = '<span class="date">' + date + '</span> ' + memberName + ' moved from <span class="list">' + update.listBefore + '</span> to <span class="list">' + update.listAfter + '</span>';
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  };
}; /// @cond

BoardView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
BoardView.prototype.constructor = BoardView; /// @endcond

/***/ }),

/***/ "./src/Card.js":
/*!*********************!*\
  !*** ./src/Card.js ***!
  \*********************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/Util.js");
/**
 * @file
 * Representation of a Trello list in a board
 */

var Card = function Card(board, list, data) {
  var that = this;
  this.board = board;
  this.list = list;
  this.id = data.id;
  this.name = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.name);
  this.data = data;
  this.desc = '<p>' + _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.desc).replace(/\n/gm, '<p>') + '</p>';
  this.created = new Date(parseInt(data.id.substr(0, 8), 16) * 1000);
  this.members = [];
  data.idMembers.forEach(function (id) {
    that.members.push(id);
  });
  this.comments = [];
  this.updates = [];
};

Card.prototype.sort_updates = function () {
  this.updates.sort(function (a, b) {
    if (a.date < b.date) {
      return -1;
    } else if (a.date == b.date) {
      return 0;
    } else {
      return 1;
    }
  });
};
/**
 * Determine the last time this card was moved.
 * This is used to determine when a completed card was
 * moved to Completed.
 */


Card.prototype.final_time = function () {
  if (this.updates.length > 0) {
    return this.updates[this.updates.length - 1].date;
  }

  return this.created;
};
/**
 * Count members from a collection of cards.
 * @param board Board object
 * @param list array of Card objects
 * @returns object with id as property to object {cnt: ?, member: ?}
 */


Card.count_members = function (board, list) {
  var count = {};
  list.forEach(function (card) {
    card.members.forEach(function (id) {
      var member = board.members[id];

      if (count.hasOwnProperty(member.id)) {
        count[member.id].cnt++;
      } else {
        count[member.id] = {
          cnt: 1,
          member: member
        };
      }
    });
  });
  return count;
};

/***/ }),

/***/ "./src/Comment.js":
/*!************************!*\
  !*** ./src/Comment.js ***!
  \************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/Util.js");
/**
 * @file
 * Representation of a Trello comment on a card
 */

/**
 Array
 (
 [id] => 57eec1ca22684646b1193abd
 [idMemberCreator] => 57ec1bdafeedcbbc73d600d1
 [data] => Array
 (
 [list] => Array
 (
 [name] => Design
 [id] => 57e920a2b34518203fd5f319
 )

 [board] => Array
 (
 [shortLink] => i9eXE4yJ
 [name] => Project 1 Team: Arbo
 [id] => 57e9204ac3f323f1785d7be4
 )

 [card] => Array
 (
 [shortLink] => Fggvd4nX
 [idShort] => 21
 [name] => Visual Paradigm Class Design
 [id] => 57eec0776fd005f7b81c8239
 )

 [text] => Visual Paradigm Class Design
 )

 [type] => commentCard
 [date] => 2016-09-30T19:49:30.974Z
 [memberCreator] => Array
 (
 [id] => 57ec1bdafeedcbbc73d600d1
 [avatarHash] =>
 [fullName] => Brittany Galliers
 [initials] => BG
 [username] => brittanygalliers1
 )
 * @param board
 * @param card
 * @param data
 * @constructor
 */

var Comment = function Comment(board, card, data) {
  this.board = board;
  this.card = card;
  this.member = data.idMemberCreator;
  this.text = '<p>' + _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.data.text).replace(/\n/gm, '<p>') + '</p>';
  this.data = data;
  this.date = new Date(Date.parse(data.date));
};

/***/ }),

/***/ "./src/DataView.js":
/*!*************************!*\
  !*** ./src/DataView.js ***!
  \*************************/
/*! exports provided: DataView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataView", function() { return DataView; });
/*
 * Base object for views of Trello data.
 */
var DataView = function DataView() {};

DataView.prototype.present = function (div, board) {};

/***/ }),

/***/ "./src/DisconnectedView.js":
/*!*********************************!*\
  !*** ./src/DisconnectedView.js ***!
  \*********************************/
/*! exports provided: DisconnectedView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedView", function() { return DisconnectedView; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/Util.js");

var DisconnectedView = function DisconnectedView(element, trello, options) {
  // Ensure empty
  element.innerHTML = '';
  var div = document.createElement('div');
  element.appendChild(div);
  _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(div, 'trello-sprinter');
  var p = document.createElement('p');
  div.appendChild(p);
  _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(p, 'center');
  var button = document.createElement('button');
  p.appendChild(button);
  button.innerText = 'Connect to Trello';
  button.addEventListener('click', function (event) {
    event.preventDefault();
    trello.authorize();
  });
};

/***/ }),

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/Card.js");
/**
 * @file
 * Representation of a Trello list in a board
 */

var List = function List(board, data) {
  this.board = board;
  this.id = data.id;
  this.name = data.name;
  this.data = data;
  this.cards = [];
  this.cards_by_id = {};
};

List.prototype.add_card = function (card) {
  this.cards.push(card);
  this.cards_by_id[card.id] = card;
};

List.prototype.find_card = function (id) {
  if (this.cards_by_id.hasOwnProperty(id)) {
    return this.cards_by_id[id];
  }

  return null;
};

List.prototype.count_members = function () {
  return _Card__WEBPACK_IMPORTED_MODULE_0__["Card"].count_members(this.board, this.cards);
};

/***/ }),

/***/ "./src/MainView.js":
/*!*************************!*\
  !*** ./src/MainView.js ***!
  \*************************/
/*! exports provided: MainView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainView", function() { return MainView; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/Util.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./src/Board.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardView */ "./src/BoardView.js");
/* harmony import */ var _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprints/SprintView */ "./src/Sprints/SprintView.js");
/* harmony import */ var _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sprints/SprintTableView */ "./src/Sprints/SprintTableView.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisconnectedView */ "./src/DisconnectedView.js");






var MainView = function MainView(element, trello, options) {
  // Ensure empty
  element.innerHTML = '';
  var div = document.createElement('div');
  element.appendChild(div);
  _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(div, 'trello-sprinter');
  var p = document.createElement('p');
  div.appendChild(p);
  _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(p, 'center');
  var button = document.createElement('button');
  p.appendChild(button);
  button.innerText = 'Disconnect';
  button.addEventListener('click', function (event) {
    event.preventDefault();
    trello.disconnect();
    new _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__["DisconnectedView"](element, trello, options);
  });
  var pStatus = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].createElement('p', 'trello-status');
  pStatus.innerText = 'Connecting to Trello...';
  div.appendChild(pStatus);
  var pMsg = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].createElement('p', 'trello-msg');
  div.appendChild(pMsg);
  _Board__WEBPACK_IMPORTED_MODULE_1__["Board"].fetch(trello, options.board, pMsg, function (board) {
    // Success
    pStatus.innerText = 'Trello Board: ' + board.name;
    pMsg.parentNode.removeChild(pMsg);

    for (var view in options.views) {
      switch (view) {
        case 'board':
          var v = new _BoardView__WEBPACK_IMPORTED_MODULE_2__["BoardView"](div, board);
          v.present();
          break;

        case 'sprint':
          v = new _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__["SprintView"](div, board, options.views.sprint);
          v.present();
          break;

        case 'sprintTable':
          v = new _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__["SprintTableView"](div, board, options.views.sprintTable);
          v.present();
          break;
      }
    }
  }, function (msg) {
    // Failure
    pMsg.parentNode.removeChild(pMsg);
    pStatus.innerText = msg;
  }); //trello.fetch();
};

/***/ }),

/***/ "./src/Member.js":
/*!***********************!*\
  !*** ./src/Member.js ***!
  \***********************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/*
 * Representation of a Trello member in a board
 */
var Member = function Member(board, data) {
  this.board = board;
  this.id = data.id;
  this.name = data.fullName;
  this.data = data;
};

/***/ }),

/***/ "./src/Sprints/Sprint.js":
/*!*******************************!*\
  !*** ./src/Sprints/Sprint.js ***!
  \*******************************/
/*! exports provided: Sprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprint", function() { return Sprint; });
/*
 * Represents a single sprint in the sprints analysis
 */
var Sprint = function Sprint(sprints, start, end) {
  this.sprints = sprints;
  this.start_meeting = start;
  this.end_meeting = end;
  this.completed = [];
};

Sprint.prototype.end_time = function () {
  return new Date(this.end_meeting.created.getTime() + this.sprints.sprint_time_slop * 1000);
};

/***/ }),

/***/ "./src/Sprints/SprintMember.js":
/*!*************************************!*\
  !*** ./src/Sprints/SprintMember.js ***!
  \*************************************/
/*! exports provided: SprintMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintMember", function() { return SprintMember; });
/**
 * @file
 * Team member statistics for a sprint
 */
var SprintMember = function SprintMember(sprints, member) {
  this.member = member;
  this.sprints = sprints;
  this.meetings_count = 0;
  this.meetings_attended = 0;
  this.completed_count = 0;
  this.completed_total = 0;
  this.reviews_count = 0;
  this.reviews_total = 0;
};

SprintMember.prototype.meetings_percentage = function () {
  if (this.meetings_count <= this.sprints.meetings_slop) {
    return '(insufficient meetings)';
  }

  var per = this.meetings_attended / (this.meetings_count - this.sprints.meetings_slop);

  if (per > 1) {
    per = 1;
  }

  return per.toFixed(2);
};

SprintMember.prototype.completed_factor = function (teamSize) {
  if (this.completed_total === 0) {
    return 0;
  }

  var factor = this.completed_count / (this.completed_total / teamSize * this.sprints.completed_factor);

  if (factor > 1) {
    factor = 1;
  }

  return factor.toFixed(2);
};

SprintMember.prototype.reviewing_factor = function (teamSize) {
  if (this.reviews_total === 0) {
    return 0;
  }

  var factor = this.reviews_count / (this.reviews_total / teamSize * this.sprints.reviewing_factor);

  if (factor > 1) {
    factor = 1;
  }

  return factor.toFixed(2);
};

/***/ }),

/***/ "./src/Sprints/SprintTableView.js":
/*!****************************************!*\
  !*** ./src/Sprints/SprintTableView.js ***!
  \****************************************/
/*! exports provided: SprintTableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintTableView", function() { return SprintTableView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./src/BoardView.js");
/*
 * Trello board view that displays sprint result in a table.
 */





var SprintTableView = function SprintTableView(div, board, options) {
  _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this);
  var add_headings = true;

  if (options.addHeadings !== undefined) {
    add_headings = options.addHeadings;
  }

  this.present = function () {
    var view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-sprint-table');
    div.appendChild(view);
    var table = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('table');
    view.appendChild(table); //
    // Create the sprint analysis
    //

    var sprints = new _Sprints__WEBPACK_IMPORTED_MODULE_1__["Sprints"](board);
    var teamSize = sprints.num_members();

    if (add_headings) {
      tableHeading(table, board, sprints);
    }

    var rowHTML = '';

    function item(data) {
      rowHTML += '<td>' + data + '</td>';
    }

    for (var id in sprints.members) {
      if (sprints.members.hasOwnProperty(id)) {
        var member = sprints.members[id];
        var id = member.member.id;
        rowHTML = ''; // Our statistics

        item(board.name);
        item(teamSize);
        item(member.member.name);
        item(member.meetings_attended);
        item(member.meetings_count);
        item(member.meetings_percentage());
        item(member.completed_count);
        item(member.completed_total);
        item(member.completed_factor(teamSize));
        item(member.reviews_count);
        item(member.reviews_total);
        item(member.reviewing_factor(teamSize));
        item(sprints.sprints.length);
        sprints.sprints.forEach(function (sprint) {
          var cnt = 0;
          sprint.completed.forEach(function (card) {
            if (card.members.length == 1 && card.members[0] == id) {
              cnt++;
            }
          });
          item(cnt);
          item(sprint.completed.length);
        });

        if (!isNaN(add_headings)) {
          for (var i = sprints.sprints.length; i < add_headings; i++) {
            item("&nbsp;");
            item("&nbsp;");
          }
        }

        var tr = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('tr');
        tr.innerHTML = rowHTML;
        table.appendChild(tr);
      }
    }
  };

  var tableHeading = function tableHeading(table, board, sprints) {
    var tr = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('tr');
    table.appendChild(tr);
    var rowHTML = '';

    function item(data) {
      rowHTML += '<th>' + data + '</th>';
    }

    item("Team");
    item("#");
    item("Member");
    item("Attended");
    item("Total");
    item("%");
    item("Completed");
    item("Total");
    item("%");
    item("Reviews");
    item("Total");
    item("%");
    item("Sprints");

    if (add_headings === true) {
      for (var i = 1; i <= sprints.sprints.length; i++) {
        item(i);
        item("#");
      }
    } else {
      for (var i = 1; i <= add_headings; i++) {
        item(i);
        item("#");
      }
    }

    tr.innerHTML = rowHTML;
  };
}; /// @cond

SprintTableView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
SprintTableView.prototype.constructor = SprintTableView; /// @endcond

SprintTableView.prototype.table_headings = function (board, sprints) {};

/***/ }),

/***/ "./src/Sprints/SprintView.js":
/*!***********************************!*\
  !*** ./src/Sprints/SprintView.js ***!
  \***********************************/
/*! exports provided: SprintView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintView", function() { return SprintView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./src/BoardView.js");
/**
 * @file
 * Trello board view that displays sprint results
 */





var SprintView = function SprintView(div, board) {
  _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this); // This uses BoardView to draw what it knows how to draw

  var board_view = new _BoardView__WEBPACK_IMPORTED_MODULE_4__["BoardView"](div, board);

  this.present = function () {
    //
    // Create the sprint analysis
    //
    var sprints = new _Sprints__WEBPACK_IMPORTED_MODULE_1__["Sprints"](board);
    var view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-sprints');
    div.appendChild(view);
    var h2 = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('h2');
    h2.innerText = 'Sprints Analysis';
    view.appendChild(h2);
    present_errors(view, sprints);
    present_warnings(view, sprints);

    if (sprints.errors.length > 0) {
      return;
    }

    present_sprints(view, sprints);
    present_members(view, sprints);
  };

  var present_errors = function present_errors(div, sprints) {
    if (sprints.errors.length === 0) {
      return;
    }

    var errors = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-errors');
    div.appendChild(errors);
    errors.innerHTML = '<h3>Errors</h3>';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = sprints.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var error = _step.value;
        var p = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p');
        errors.appendChild(p);
        p.innerHTML = '<span class="trello-code">' + error.code + ':</span> ' + error.msg;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var present_warnings = function present_warnings(div, sprints) {
    if (sprints.warnings.length === 0) {
      return;
    }

    var warnings = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-warnings');
    div.appendChild(warnings);
    warnings.innerHTML = '<h3>Warnings</h3>';
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = sprints.warnings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var warning = _step2.value;
        var p = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p');
        warnings.appendChild(p);
        p.innerHTML = '<span class="trello-code">' + warning.code + ':</span> ' + warning.msg;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  var present_sprints = function present_sprints(div, sprints) {
    var view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-view');
    div.appendChild(view);

    for (var s = 1; s <= sprints.sprints.length; s++) {
      var sprint = sprints.sprints[s - 1];
      present_sprint(view, sprints, s, sprint);
    }
  };

  var present_sprint = function present_sprint(div, sprints, num, sprint) {
    var fmDate = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].formatDatetime(sprint.start_meeting.created);
    var toDate = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].formatDatetime(sprint.end_meeting.created);
    var completed = sprint.completed.length; //
    // Member counts for completed
    //

    var counts = _Card__WEBPACK_IMPORTED_MODULE_3__["Card"].count_members(sprints.board, sprint.completed);
    var totalCompleted = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = sprints.sprints[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _sprint = _step3.value;
        totalCompleted += _sprint.completed.length;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var completionFactor = 0.00;

    if (totalCompleted > 0) {
      completionFactor = completed / (totalCompleted / sprints.sprints.length * 0.8);

      if (completionFactor > 1) {
        completionFactor = 1;
      }
    }

    completionFactor = completionFactor.toFixed(2);
    var header = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('h3', 'trello-plus');
    div.appendChild(header);
    header.innerHTML = '<span class="date">' + completed + ' tasks ' + completionFactor + ' / ' + fmDate + ' to ' + toDate + '</span>Sprint: ' + num;
    var expander = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-expand');
    expander.style.display = 'none';
    div.appendChild(expander);
    header.addEventListener('click', function (event) {
      if (expander.style.display === 'none') {
        expander.style.display = 'block';
        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].removeClass(header, 'trello-plus');
        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].addClass(header, 'trello-minus');
      } else {
        expander.style.display = 'none';
        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].removeClass(header, 'trello-minus');
        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].addClass(header, 'trello-plus');
      }
    });
    board_view.presentCard(expander, sprint.start_meeting);
    board_view.presentCard(expander, sprint.end_meeting); //
    // Completed
    //

    var pCompleted = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p', 'trello-completed-header');
    expander.appendChild(pCompleted);
    pCompleted.innerText = 'Sprint Completed Tasks';
    var pMembers = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p', 'trello-count');
    expander.appendChild(pMembers);
    var members = '<em>Completed:</em>[' + sprint.completed.length + '] ';

    for (var c in counts) {
      if (counts.hasOwnProperty(c)) {
        members += counts[c].member.name + ':[' + counts[c].cnt + ']&nbsp;&nbsp;';
      }
    }

    pMembers.innerHTML = members; //
    // Present completed cards
    //

    for (var i = 0; i < sprint.completed.length; i++) {
      var _completed = sprint.completed[i];
      board_view.presentCard(expander, _completed);
    }
  };

  var present_members = function present_members(div, sprints) {
    var membersDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-members');
    div.appendChild(membersDiv);

    for (var id in sprints.members) {
      if (sprints.members.hasOwnProperty(id)) {
        var member = sprints.members[id];
        present_member(membersDiv, sprints, member);
      }
    }

    present_info(membersDiv, sprints);
  };

  var present_member = function present_member(div, sprints, member) {
    var memberDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-member');
    div.appendChild(memberDiv);
    var meetings = sprints.meetings_slop === 1 ? ' meeting' : ' meetings';
    var teamSize = sprints.num_members();
    memberDiv.innerHTML = '<h4>' + member.member.name + '</h4>' + '<p>Meetings attended: ' + member.meetings_attended + '/' + member.meetings_count + ' percentage: ' + member.meetings_percentage() + ' <em>You are allowed to miss ' + sprints.meetings_slop + meetings + '</em>' + '</p>' + '<p>Tasks completed: ' + member.completed_count + '/' + (member.completed_total / teamSize).toFixed(2) + ' for a completion factor of: ' + member.completed_factor(teamSize) + '</p>' + '<p>Reviews completed: ' + member.reviews_count + ' for a reviewing factor of: ' + member.reviewing_factor(teamSize) + '</p>';
  };

  var present_info = function present_info(div, sprints) {
    var infoDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-info');
    div.appendChild(infoDiv);
    infoDiv.innerHTML = '<p>The completion factor for tasks is based on a metric that every' + ' team member is expected to complete ' + (sprints.completed_factor * 100).toFixed(0) + '% of' + ' an equal distribution of tasks. Values less than 1.00 indicate that you will be' + ' losing points on the assignment.</p>' + '<p>The reviewing factor for tasks is based on a metric that every team member' + ' is expected to review ' + (sprints.reviewing_factor * 100).toFixed(0) + '% of an equal' + ' distribution of tasks. This factor is based on a metric that 90% of tasks should' + ' be programming tasks. Values less than 1.00 indicate that you will be' + ' losing points on the assignment.</p>';
  };
}; /// @cond

SprintView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
SprintView.prototype.constructor = SprintView; /// @endcond

/***/ }),

/***/ "./src/Sprints/Sprints.js":
/*!********************************!*\
  !*** ./src/Sprints/Sprints.js ***!
  \********************************/
/*! exports provided: Sprints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprints", function() { return Sprints; });
/* harmony import */ var _Sprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprint */ "./src/Sprints/Sprint.js");
/* harmony import */ var _SprintMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SprintMember */ "./src/Sprints/SprintMember.js");
/*
 * Sprint analysis of Trello board
 */


var Sprints = function Sprints(board) {
  var that = this; /// Number of missed meetings allow

  this.meetings_slop = 1; /// Number of seconds after meeting time to consider completed
  /// in a current sprint in seconds.

  this.sprint_time_slop = 5 * 60 * 60; // 5 hours
  /// Each users is expected to complete 80% of his share of tasks

  this.completed_factor = 0.8; /// Each users is expected to complete 80% of 90% of the task count in reviews

  this.reviewing_factor = 0.8 * 0.9;
  this.board = board;
  this.errors = [];
  this.warnings = [];
  this.members = {};
  this.sprints = [];
  this.design = null;
  this.risks = null;
  this.meetings = null;
  this.todo = null;
  this.sprint_active = null;
  this.sprint_completed = null;
  this.completed = null; //
  // Copy over the members
  //

  for (var id in board.members) {
    var member = board.members[id];

    if (member.name.toLowerCase() === "cse335") {
      continue;
    }

    this.members[id] = new _SprintMember__WEBPACK_IMPORTED_MODULE_1__["SprintMember"](this, member);
  } //
  // Find all of the required lists
  //


  this.find_lists();

  if (this.errors.length > 0) {
    this.error('e900');
    return;
  } //
  // Order testing
  //


  this.order_test(); //
  // Determine attendance
  //

  this.meeting_attendance(); //
  // Convert meetings into sprints
  //

  this.create_sprints(); //
  // Sort completed into sprints
  //

  this.sort_completed(); //
  // Completed statistics
  //

  this.completed_statistics();
};
/**
 * Ensure all required lists exist.
 */

Sprints.prototype.find_lists = function () {
  // Find the "Design" list
  this.design = this.board.find_list('Design');

  if (this.design === null) {
    this.error('e001');
  } // Find the "Risks" list


  this.risks = this.board.find_list('Risks');

  if (this.risks === null) {
    this.error('e002');
  } // Find the "Meetings" list


  this.meetings = this.board.find_list('Meetings');

  if (this.meetings === null) {
    this.error('e003');
  } // Find the "To Do" list


  this.todo = this.board.find_list('To Do');

  if (this.todo === null) {
    this.error('e004');
  } // Find the "This Sprint Active" list


  this.sprint_active = this.board.find_list('This Sprint Active');

  if (this.sprint_active === null) {
    this.error('e005');
  } // Find the "This Sprint Completed" list


  this.sprint_completed = this.board.find_list('This Sprint Completed');

  if (this.sprint_completed === null) {
    this.error('e006');
  } // Find the "Completed" list


  this.completed = this.board.find_list('Completed');

  if (this.completed === null) {
    this.error('e007');
  }
};
/**
 * Ensure lists are in the right order
 */


Sprints.prototype.order_test = function () {
  var order = ['Design', 'Risks', 'Meetings', 'To Do', 'This Sprint Active', 'This Sprint Completed', 'Completed'];

  for (var i = 0; i < order.length; i++) {
    if (this.board.lists[i].name.toLowerCase() !== order[i].toLowerCase()) {
      this.warning('w001');
      return;
    }
  }
};
/**
 * Count meeting attendance for a user
 */


Sprints.prototype.meeting_attendance = function () {
  var that = this;
  var meetings_count = this.meetings.cards.length;

  for (var id in this.members) {
    var member = this.members[id];
    member.meetings_count = meetings_count;
    member.meetings_attended = 0;
  }

  this.meetings.cards.forEach(function (card) {
    card.members.forEach(function (id) {
      var member = that.find_member(id);

      if (member !== null) {
        member.meetings_attended++;
      }
    });
  });
};

Sprints.prototype.create_sprints = function () {
  var meetings = this.meetings.cards.slice();
  meetings.sort(function (a, b) {
    if (a.created < b.created) {
      return -1;
    } else if (a.created === b.created) {
      return 0;
    } else {
      return 1;
    }
  });

  for (var i = 0; i < meetings.length - 1; i++) {
    this.sprints.push(new _Sprint__WEBPACK_IMPORTED_MODULE_0__["Sprint"](this, meetings[i], meetings[i + 1]));
  }
};

Sprints.prototype.sort_completed = function () {
  var that = this;
  var completed = this.completed.cards.slice();
  completed.sort(function (a, b) {
    var at = a.final_time();
    var bt = b.final_time();

    if (at === bt) {
      return 0;
    } else if (at < bt) {
      return -1;
    }

    return 1;
  });
  completed.forEach(function (completed) {
    //
    // We ignore "risk" cards
    //
    if (completed.name.toLowerCase().indexOf("risk") === -1) {
      var date = completed.final_time();

      for (var i = 0; i < that.sprints.length; i++) {
        var sprint = that.sprints[i];

        if (date <= sprint.end_time()) {
          break;
        }
      }

      if (i >= that.sprints.length) {
        i = that.sprints.length - 1;
      }

      var sprint = that.sprints[i];
      sprint.completed.push(completed);
    }
  });
};

Sprints.prototype.completed_statistics = function () {
  var completed_count = 0;
  var reviews_total = 0;

  for (var i = 0; i < this.sprints.length; i++) {
    var sprint = this.sprints[i];
    completed_count += sprint.completed.length;

    for (var j = 0; j < sprint.completed.length; j++) {
      var completed = sprint.completed[j];

      if (completed.members.length === 1) {
        var id = completed.members[0];
        var member = this.find_member(id);

        if (member !== null) {
          member.completed_count++;
        }
      } else if (completed.members.length === 0) {
        this.warning("w002", "Completed task <em>" + completed.name + "</em> has no team members assigned. Nobody will get credit for that task.");
      } else {
        this.warning("w003", "Completed task <em>" + completed.name + "</em> has more than one team member assigned. Nobody will get credit for that task.");
      } // Are they any reviews?


      if (completed.comments.length > 0) {
        reviews_total++;
        var id = completed.comments[0].member;
        var member = this.find_member(id);

        if (member !== null) {
          member.reviews_count++;
        }
      }
    }
  }

  for (var id in this.members) {
    this.members[id].completed_total = completed_count;
    this.members[id].reviews_total = reviews_total;
  }
};

Sprints.prototype.find_member = function (id) {
  if (this.members.hasOwnProperty(id)) {
    return this.members[id];
  }

  return null;
};

Sprints.prototype.num_members = function () {
  var cnt = 0;

  for (var id in this.members) {
    if (this.members.hasOwnProperty(id)) {
      cnt++;
    }
  }

  return cnt;
};

Sprints.prototype.error = function (code) {
  // Does the error already exist?
  for (var i = 0; i < this.errors.length; i++) {
    var error = this.errors[i];

    if (error.code === code) {
      return;
    }
  }

  switch (code) {
    case 'e001':
      this.errors.push({
        code: code,
        msg: "There is no list named 'Design'"
      });
      break;

    case 'e002':
      this.errors.push({
        code: code,
        msg: "There is no list named 'Risks'"
      });
      break;

    case 'e003':
      this.errors.push({
        code: code,
        msg: "There is no list named 'Meetings'"
      });
      break;

    case 'e004':
      this.errors.push({
        code: code,
        msg: "There is no list named 'To Do'"
      });
      break;

    case 'e005':
      this.errors.push({
        code: code,
        msg: "There is no list named 'This Sprint Active'"
      });
      break;

    case 'e006':
      this.errors.push({
        code: code,
        msg: "There is no list named 'This Sprint Completed'"
      });
      break;

    case 'e007':
      this.errors.push({
        code: code,
        msg: "There is no list named 'Completed'"
      });
      break;

    case 'e900':
      this.errors.push({
        code: code,
        msg: "Fatal errors, unable to proceed with sprints analysis"
      });
      break;
  }
};

Sprints.prototype.warning = function (code, msg) {
  if (msg !== undefined) {
    this.warnings.push({
      code: code,
      msg: msg
    });
    return;
  }

  switch (code) {
    case 'w001':
      this.warnings.push({
        code: code,
        msg: "Your lists are not in the correct order. " + "The exact order should be: Design, Risks, Meetings, To Do, " + "This Sprint Active, This Sprint Completed, " + "Completed"
      });
      break;
  }
};

/***/ }),

/***/ "./src/TrelloConnect.js":
/*!******************************!*\
  !*** ./src/TrelloConnect.js ***!
  \******************************/
/*! exports provided: TrelloConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloConnect", function() { return TrelloConnect; });
// Local storage address for storing the token while connected
var TokenStorage = '_QgBwnr5UQ3';
var TrelloConnect = function TrelloConnect(options) {
  var token = '';

  this.initialize = function () {
    // Till we know otherwise
    this.state = TrelloConnect.DISCONNECTED; //
    // See if there is a token in the current URL
    //

    var href = window.location.href;
    var re = /#token=(.*)$/;
    var matches = href.match(re);

    if (matches !== null && matches.length > 1) {
      token = matches[1];
      console.log(window.location);
      var _localStorage = window.localStorage;

      _localStorage.setItem(options.localPrefix + TokenStorage, token);

      window.location = window.location.origin + window.location.pathname;
    } //
    // Is there a token in local storage?
    //


    var localStorage = window.localStorage;
    token = localStorage.getItem(options.localPrefix + TokenStorage, token);

    if (token !== null && token.length > 0) {
      this.state = TrelloConnect.CONNECTED;
    }
  };

  this.authorize = function () {
    var url = "".concat(options.authEndpoint, "/").concat(options.version, "/authorize?expiration=never&name=").concat(options.name, "&") + "callback_method=fragment&scope=read&response_type=token&key=".concat(options.key, "&return_url=").concat(window.location.href);
    window.location = url;
  };

  this.disconnect = function () {
    var localStorage = window.localStorage;
    localStorage.removeItem(options.localPrefix + TokenStorage);
    token = '';
  };

  this.get = function (url, success, failure, msg) {
    var tries = 1;
    var maxtries = 5; // Maximum number of tries

    var backoff = 10; // seconds

    var backoffIncrease = 1.25; // Amount to increase backoff after each try

    function trelloGet() {
      var request = new XMLHttpRequest();
      request.open('GET', "".concat(options.apiEndpoint, "/").concat(options.version, "/").concat(url, "&key=").concat(options.key, "&token=").concat(token), true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);
          success(data);
        } else {
          // We reached our target server, but it returned an error
          failure();
        }
      };

      request.onerror = function () {
        if (+request.status === 429 && tries < maxtries) {
          tries++;

          if (msg !== undefined) {
            msg.innerText = "Rate limited, attempt " + tries + " after " + backoff.toFixed(0) + " seconds";
            setTimeout(function () {
              trelloGet();
            }, backoff * 1000);
            backoff *= backoffIncrease;
          }
        } else {
          failure();
        }
      };

      request.send();
    }

    trelloGet();
  };

  this.initialize();
};
TrelloConnect.DISCONNECTED = 'D';
TrelloConnect.CONNECTED = 'C';

/***/ }),

/***/ "./src/TrelloSprinter.js":
/*!*******************************!*\
  !*** ./src/TrelloSprinter.js ***!
  \*******************************/
/*! exports provided: TrelloSprinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloSprinter", function() { return TrelloSprinter; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/options.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./src/Util.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisconnectedView */ "./src/DisconnectedView.js");
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainView */ "./src/MainView.js");
/* harmony import */ var _TrelloConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrelloConnect */ "./src/TrelloConnect.js");





var TrelloSprinter = function TrelloSprinter(userOptions) {
  // Default and supplied options
  var opts = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].merge(_options__WEBPACK_IMPORTED_MODULE_0__["options"], userOptions);
  var trello = new _TrelloConnect__WEBPACK_IMPORTED_MODULE_4__["TrelloConnect"](opts);
  _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].ready(function () {
    var elements;

    if (opts.sel.nodeType) {
      elements = [opts.sel];
    } else {
      elements = document.querySelectorAll(opts.sel);
    }

    for (var i = 0; i < elements.length; i++) {
      switch (trello.state) {
        case _TrelloConnect__WEBPACK_IMPORTED_MODULE_4__["TrelloConnect"].DISCONNECTED:
          new _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__["DisconnectedView"](elements[i], trello, opts);
          break;

        default:
          new _MainView__WEBPACK_IMPORTED_MODULE_3__["MainView"](elements[i], trello, opts);
          break;
      }
    }
  });
};

/***/ }),

/***/ "./src/Update.js":
/*!***********************!*\
  !*** ./src/Update.js ***!
  \***********************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/**
 * @file
 * Representation of a Trello update on a card
 */
var Update = function Update(board, card, data) {
  this.board = board;
  this.card = card;
  this.data = data;
  this.member = data.idMemberCreator;
  this.listBefore = data.data.listBefore.name;
  this.listAfter = data.data.listAfter.name;
  this.date = new Date(Date.parse(data.date));
};

/***/ }),

/***/ "./src/Util.js":
/*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
var Util = function Util() {};

Util.merge = function (obj1, obj2) {
  var obj = {};

  for (var key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      obj[key] = obj1[key];
    }
  }

  for (var _key in obj2) {
    if (obj2.hasOwnProperty(_key)) {
      obj[_key] = obj2[_key];
    }
  }

  return obj;
};
/**
 * Remove all HTML tags from a string.
 * @param str String to process
 * @returns string without tags
 */


Util.strip_tags = function (str) {
  return str.replace(/<(?:.|\n)*?>/gm, '');
};

Util.createElement = function (type, cls) {
  var e = document.createElement(type);

  if (cls !== undefined) {
    Util.addClass(e, cls);
  }

  return e;
};

Util.addClass = function (el, className) {
  if (el.classList) el.classList.add(className);else el.className += ' ' + className;
};

Util.removeClass = function (el, className) {
  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

Util.ready = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};
/**
 * Convert a JavaScript Date object to a string.
 *
 * This uses formatting that is subset of the PHP date() function.
 * @param date Date object
 * @param format Optional format string (default is 'n-d-Y h:ia').
 * @returns {string}
 */


Util.formatDatetime = function (date, format) {
  function pad(i, n) {
    var s = '' + i;

    while (s.length < n) {
      s = '0' + s;
    }

    return s;
  }

  if (format === undefined) {
    format = 'n-d-Y h:ia';
  }

  var hours = date.getHours();
  var hour = hours;
  var am = 'a';

  if (hours == 0) {
    hour = 12;
  } else if (hours == 12) {
    am = 'p';
  } else if (hours > 12) {
    hour = hours - 12;
    am = 'p';
  }

  var str = '';

  for (var i = 0; i < format.length; i++) {
    switch (format.charAt(i)) {
      case 'n':
        str += date.getMonth() + 1;
        break;

      case 'm':
        str += pad(date.getMonth() + 1, 2);
        break;

      case 'd':
        str += pad(date.getDate(), 2);
        break;

      case 'Y':
        str += date.getFullYear();
        break;

      case 'g':
        str += hour;
        break;

      case 'h':
        str += pad(hour, 2);
        break;

      case 'i':
        str += pad(date.getMinutes(), 2);
        break;

      case 's':
        str += pad(date.getSeconds(), 2);
        break;

      case 'a':
        str += am;
        break;

      default:
        str += format.charAt(i);
        break;
    }
  }

  return str;
};

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var options = {
  sel: '#trello',
  version: 1,
  "apiEndpoint": "https://api.trello.com",
  "authEndpoint": "https://trello.com",
  "intentEndpoint": "https://trello.com",
  key: '',
  // Prefix to apply to local storage. Useful to
  // disambiguate multiple uses on the same site
  localPrefix: '',
  // Name of the board we are fetching
  board: '',
  views: {
    'board': {},
    'sprint': {}
  },
  name: 'TrelloSprinter'
};

/***/ }),

/***/ "./trello.scss":
/*!*********************!*\
  !*** ./trello.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss */ "../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss */ "../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss */ "../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=trello-sprinter.js.map